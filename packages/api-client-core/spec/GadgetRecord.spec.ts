import { ChangeTracking, GadgetRecord } from "../src/GadgetRecord.js";
interface SampleBaseRecord {
  id?: string;
  state?: any;
  stateHistory?: any;
  [key: string]: any;
}

const _expectNoChanges = (record: GadgetRecord<SampleBaseRecord>, tracking: ChangeTracking, ...properties: string[]) => {
  for (const property of properties) {
    expect(record.changed(property, tracking)).toEqual(false);
    expect(record.changes(property, tracking)).toEqual({ changed: false });
    expect(record.changes(tracking)[property]).toBeUndefined();
  }
};

const expectNoChanges = (record: GadgetRecord<SampleBaseRecord>, ...properties: string[]) => {
  return _expectNoChanges(record, ChangeTracking.SinceLoaded, ...properties);
};

const expectNoPersistedChanges = (record: GadgetRecord<SampleBaseRecord>, ...properties: string[]) => {
  return _expectNoChanges(record, ChangeTracking.SinceLastPersisted, ...properties);
};

const _expectChanges = (record: GadgetRecord<SampleBaseRecord>, tracking: ChangeTracking, ...properties: string[]) => {
  for (const property of properties) {
    expect(record.changed(property, tracking)).toEqual(true);
    expect(record.changes(property, tracking).changed).toEqual(true);
    expect(property in record.changes(tracking)).toEqual(true);
  }
};

const expectChanges = (record: GadgetRecord<SampleBaseRecord>, ...properties: string[]) => {
  return _expectChanges(record, ChangeTracking.SinceLoaded, ...properties);
};

const expectPersistedChanges = (record: GadgetRecord<SampleBaseRecord>, ...properties: string[]) => {
  return _expectChanges(record, ChangeTracking.SinceLastPersisted, ...properties);
};

describe("GadgetRecord", () => {
  let productBaseRecord: SampleBaseRecord;
  beforeAll(() => {
    productBaseRecord = {
      id: "123",
      name: "A cool product",
      body: "A description of why it's cool",
    };
  });

  it("should respond toJSON, which returns the inner __gadget.fields properties", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.toJSON()).toEqual({
      ...productBaseRecord,
    });
  });

  it("should proxy properties to the inner __gadget.fields object", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.id).toEqual("123");
  });

  it("should return undefined for any property that doesn't exist on the __gadget.fields object", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.foo).toBeUndefined();
  });

  it("should allow you to set properties that were instantiated with the record", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.name).toEqual("A cool product");

    product.name = "An even cooler product";
    expect(product.name).toEqual("An even cooler product");
  });

  it("should allow you to set new properties on the __gadget.fields object", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);

    product.state = "created";
    expect(product.state).toEqual("created");
  });

  it("should allow you to ask for changes on a specific property", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expectNoChanges(product, "name");

    product.name = "A newer name";
    expect(product.changed("name")).toEqual(true);
    expect(product.changes("name")).toEqual({ changed: true, current: "A newer name", previous: "A cool product" });
  });

  it("should only look at the most recent change to a property", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expectNoChanges(product, "name");

    product.name = "A newer name";
    expect(product.changed("name")).toEqual(true);

    product.name = "An even newer name";
    expect(product.changes("name")).toEqual({ changed: true, current: "An even newer name", previous: "A cool product" });
  });

  it("should treat null as a dirty value", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expectNoChanges(product, "name");

    product.name = null;
    product.newField = null;
    expectChanges(product, "name", "newField");
    expect(product.changes("name")).toEqual({ changed: true, current: null, previous: "A cool product" });
  });

  it("should treat undefined as a dirty value", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expectNoChanges(product, "name");

    product.name = undefined;
    expectChanges(product, "name");
    expect(product.changes("name")).toEqual({ changed: true, current: undefined, previous: "A cool product" });
  });

  it("changing a date's timezone shouldn't count as a change, as it is the same moment in time", () => {
    const product = new GadgetRecord<{ date: Date }>({ date: new Date("2018-10-16T10:02:34+01:00") });
    expectNoChanges(product, "date");

    product.date = new Date("2018-10-16T09:02:34.000Z");
    expect(product.changed("date")).toEqual(false);

    product.date = new Date();
    expect(product.changed("date")).toEqual(true);
  });

  it("changing a belongsTo field from a string ID to a _link object shouldn't count as a change", () => {
    const product = new GadgetRecord<{ shop: string | { _link: string } }>({ shop: "123" });
    expectNoChanges(product, "shop");

    product.shop = { _link: "123" };
    expect(product.changed("shop")).toEqual(false);

    product.shop = { _link: "124" };
    expect(product.changed("shop")).toEqual(true);

    product.shop = { _link: "123" };
    expect(product.changed("shop")).toEqual(false);
  });

  it("changing a belongsTo field from a _link object to an id string shouldn't count as a change", () => {
    const product = new GadgetRecord<{ shop: string | { _link: string } }>({ shop: { _link: "123" } });
    expectNoChanges(product, "shop");

    product.shop = "123";
    expect(product.changed("shop")).toEqual(false);

    product.shop = "124";
    expect(product.changed("shop")).toEqual(true);

    product.shop = "123";
    expect(product.changed("shop")).toEqual(false);
  });

  it("should allow you to ask for changes on the entire object", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expectNoChanges(product, "name", "body", "count");

    product.name = "A newer name";
    product.body = "A new description";
    product.count = 123;

    expect(product.changed("name")).toEqual(true);
    expect(product.changed("body")).toEqual(true);
    expect(product.changed("count")).toEqual(true);
    expect(product.changed()).toEqual(true);
    expect(product.changes()).toEqual({
      name: { current: "A newer name", previous: "A cool product" },
      body: { current: "A new description", previous: "A description of why it's cool" },
      count: { current: 123, previous: undefined },
    });
  });

  it("should allow you to ask for CURRENT values of changed props on the entire object", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expectNoChanges(product, "name", "body", "count");

    product.name = "A newer name";
    product.count = 123;

    expect(product.changed("name")).toEqual(true);
    expect(product.changed("count")).toEqual(true);
    expect(product.changed("body")).toEqual(false);
    expect(product.changed()).toEqual(true);
    expect(product.toChangedJSON()).toEqual({
      name: "A newer name",
      count: 123,
    });
  });

  it("should allow dirty tracking on array fields", () => {
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, anArray: [1, 2, 3] });
    expectNoChanges(product, "anArray");

    product.anArray.push(4);
    expect(product.changes("anArray")).toEqual({ changed: true, current: [1, 2, 3, 4], previous: [1, 2, 3] });
    expect(product.changed("anArray")).toEqual(true);

    product.anArray = [3, 4, 5];
    expect(product.changes("anArray")).toEqual({ changed: true, current: [3, 4, 5], previous: [1, 2, 3] });
    expect(product.changed("anArray")).toEqual(true);
  });

  it("should allow dirty tracking on nested objects", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject });
    expectNoChanges(product, "nestedObject");

    product.nestedObject.subArray.push(4);
    expect(product.changed("nestedObject")).toEqual(true);
    expect(product.changes("nestedObject")).toEqual({
      changed: true,
      current: { foo: "bar", subArray: [1, 2, 3, 4] },
      previous: { foo: "bar", subArray: [1, 2, 3] },
    });
  });

  it("should allow an object to become dirty, then return to a non dirty state", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });
    expectNoChanges(product, "name", "description", "nestedObject", "anArray");

    product.name = "A dirty name";
    product.body = "An even dirtier description";
    product.nestedObject.foo = "baz";
    product.anArray.pop();
    product.newField = "foo";
    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.name = productBaseRecord.name;
    product.body = productBaseRecord.body;
    product.nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    product.anArray = [1, 2, 3];
    product.newField = undefined;
    expectNoChanges(product, "name", "body", "nestedObject", "anArray", "newField");
  });

  it("should allow dirty changes to be flushed", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });
    expectNoChanges(product, "name", "description", "nestedObject", "anArray");

    product.name = "A dirty name";
    product.body = "An even dirtier description";
    product.nestedObject.foo = "baz";
    product.anArray.pop();
    product.newField = "foo";
    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.flushChanges();
    expectNoChanges(product, "name", "body", "nestedObject", "anArray", "newField");
  });

  it("should allow persisted dirty changes to be flushed", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });
    expectNoChanges(product, "name", "description", "nestedObject", "anArray");

    product.name = "A dirty name";
    product.body = "An even dirtier description";
    product.nestedObject.foo = "baz";
    product.anArray.pop();
    product.newField = "foo";
    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.flushChanges(ChangeTracking.SinceLastPersisted);
    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");
    expectNoPersistedChanges(product, "name", "body", "nestedObject", "anArray", "newField");
  });

  it("should allow dirty changes to be reverted", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });
    expectNoChanges(product, "name", "description", "nestedObject", "anArray");

    product.name = "A dirty name";
    product.body = "An even dirtier description";
    product.nestedObject.foo = "baz";
    product.anArray.pop();
    product.newField = "foo";
    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.revertChanges();
    expectNoChanges(product, "name", "description", "nestedObject", "anArray", "newField");

    expect(product.name).toEqual(productBaseRecord.name);
    expect(product.body).toEqual(productBaseRecord.body);
    expect(product.nestedObject).toEqual({ foo: "bar", subArray: [1, 2, 3] });
    expect(product.anArray).toEqual([1, 2, 3]);
    expect(product.newField).toBeUndefined();
  });

  it("should allow dirty changes to be reverted to the persisted state", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });
    expectNoChanges(product, "name", "description", "nestedObject", "anArray");

    product.name = "A dirty name";
    product.body = "An even dirtier description";
    product.nestedObject.foo = "baz";
    product.anArray.pop();
    product.newField = "foo";
    product.flushChanges(ChangeTracking.SinceLastPersisted);

    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");
    expectNoPersistedChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.name = "A very dirty name";
    product.body = "A very dirty description";
    product.nestedObject = { different: "thing" };
    product.anArray = [3, 2, 1];

    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");
    expectPersistedChanges(product, "name", "body", "nestedObject", "anArray");

    expect(product.name).toEqual("A very dirty name");
    expect(product.body).toEqual("A very dirty description");
    expect(product.nestedObject).toEqual({ different: "thing" });
    expect(product.anArray).toEqual([3, 2, 1]);
    expect(product.newField).toEqual("foo");

    product.revertChanges(ChangeTracking.SinceLastPersisted);

    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");
    expectNoPersistedChanges(product, "name", "description", "nestedObject", "anArray", "newField");

    expect(product.name).toEqual("A dirty name");
    expect(product.body).toEqual("An even dirtier description");
    expect(product.nestedObject).toEqual({ foo: "baz", subArray: [1, 2, 3] });
    expect(product.anArray).toEqual([1, 2]);
    expect(product.newField).toEqual("foo");
  });

  test("should allow reverting of ChangeTracking.SinceLoaded changes without affect ChangeTracking.SincePersisted changes", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });
    expectNoChanges(product, "name", "description", "nestedObject", "anArray");

    product.name = "A dirty name";
    product.body = "An even dirtier description";
    product.nestedObject.foo = "baz";
    product.anArray.pop();
    product.newField = "foo";

    expectChanges(product, "name", "body", "nestedObject", "anArray", "newField");
    expectPersistedChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.flushChanges(ChangeTracking.SinceLoaded);
    product.name = "A newer name";
    expectChanges(product, "name");
    expectNoChanges(product, "body", "nestedObject", "anArray", "newField");
    expectPersistedChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    product.revertChanges(ChangeTracking.SinceLoaded);
    expectNoChanges(product, "name", "body", "nestedObject", "anArray", "newField");
    expectPersistedChanges(product, "name", "body", "nestedObject", "anArray", "newField");

    expect(product.name).toEqual("A dirty name");
    expect(product.body).toEqual("An even dirtier description");
    expect(product.nestedObject).toEqual({ foo: "baz", subArray: [1, 2, 3] });
    expect(product.anArray).toEqual([1, 2]);
    expect(product.newField).toEqual("foo");
  });

  test("should allow touching, which marks the record as changed without changing field values", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.changed()).toBe(false);
    product.touch();
    expect(product.changed()).toBe(true);
    expect(product.changed(ChangeTracking.SinceLastPersisted)).toBe(true);
    expect(product.changed(ChangeTracking.SinceLoaded)).toBe(true);
    expect(product.changes()).toEqual({});
    expect(product.toChangedJSON()).toEqual({});
  });

  test("reverting changes clears touched status", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.changed()).toBe(false);
    product.touch();
    expect(product.changed()).toBe(true);
    product.revertChanges();
    expect(product.changed()).toBe(false);
  });

  test("should allow touching and changing fields together", () => {
    const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
    expect(product.changed()).toBe(false);
    product.name = "A new name";
    expect(product.changed()).toBe(true);
    product.touch();
    expect(product.changed()).toBe(true);
    product.revertChanges();
    expect(product.changed()).toBe(false);
  });

  test("arrays and objects stored in the instantiated and persisted fields should be independent of each other and active fields", () => {
    const nestedObject = { foo: "bar", subArray: [1, 2, 3] };
    const anArray = [1, 2, 3];
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, nestedObject, anArray });

    product.revertChanges();
    product.anArray.pop();
    product.nestedObject.foo = "baz";
    expect(product.changed("anArray")).toEqual(true);
    expect(product.changed("nestedObject")).toEqual(true);
    expect(product.anArray).toEqual([1, 2]);
    expect(product.nestedObject.foo).toEqual("baz");

    product.revertChanges(ChangeTracking.SinceLastPersisted);
    product.anArray.pop();
    product.nestedObject.foo = "baz";
    expect(product.changed("anArray", ChangeTracking.SinceLastPersisted)).toEqual(true);
    expect(product.changed("nestedObject", ChangeTracking.SinceLastPersisted)).toEqual(true);
    expect(product.anArray).toEqual([1, 2]);
    expect(product.nestedObject.foo).toEqual("baz");

    product.flushChanges();
    expect(product.anArray).toEqual([1, 2]);
    expect(product.nestedObject.foo).toEqual("baz");
    expect(product.changed("anArray")).toEqual(false);
    expect(product.changed("nestedObject")).toEqual(false);
    expect(product.changed("anArray", ChangeTracking.SinceLastPersisted)).toEqual(true);
    expect(product.changed("nestedObject", ChangeTracking.SinceLastPersisted)).toEqual(true);
  });

  it("should allow fields with names that conflict with the GadgetRecord API to be accessed via getField() and setField()", () => {
    const product = new GadgetRecord<SampleBaseRecord>({ ...productBaseRecord, changed: false });

    expect(product.getField("changed")).toEqual(false);
    product.setField("changed", true);
    expect(product.getField("changed")).toEqual(true);
  });

  describe("record changes for current Date values against previous string value", () => {
    it("correctly calculates overall record changed when the current value is the same Date as the previous value", () => {
      // tests record.changed() with no specific field
      const dateStr = "2024-04-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: dateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed()).toBe(false);

      product.publishedAt = new Date(dateStr);
      expect(product.changed()).toBe(false);
    });

    it("correctly calculates record changed for a certain field when the current value is a Date and is the same date as the previous value", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const dateStr = "2024-04-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: dateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date(dateStr);
      expect(product.changed("publishedAt")).toBe(false);
    });

    it("correctly calculates record changed for a certain field when the current value is a string and is the same date as the previous value", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const dateStr = "2024-04-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: new Date(dateStr),
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = dateStr;
      expect(product.changed("publishedAt")).toBe(false);
    });

    it("correctly calculates overall record changed when the current value is a newer Date than the previous value", () => {
      // tests record.changed() with no specific field

      const oldDateStr = "2024-04-19T21:03:37.000Z";
      const newDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed()).toBe(false);

      product.publishedAt = new Date(newDateStr);
      expect(product.changed()).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current value is a Date and is a newer date than the previous value", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldDateStr = "2024-04-19T21:03:37.000Z";
      const newDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date(newDateStr);
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current value is a string and is a newer date than the previous value", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldDateStr = "2024-04-19T21:03:37.000Z";
      const newDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: new Date(oldDateStr),
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = newDateStr;
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates overall record changed when the current value is an older Date than the previous value", () => {
      // tests record.changed() with no specific field

      const oldDateStr = "2024-04-19T21:03:37.000Z";
      const newDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: newDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed()).toBe(false);

      product.publishedAt = new Date(oldDateStr);
      expect(product.changed()).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current value is a Date and is an older date than the previous value", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldDateStr = "2024-04-19T21:03:37.000Z";
      const newDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: newDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date(oldDateStr);
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current value is a string and is an older date than the previous value", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldDateStr = "2024-04-19T21:03:37.000Z";
      const newDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: new Date(newDateStr),
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = oldDateStr;
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current value is an invalid date string", () => {
      // tests record.changed("publishedAt") ie changes for a certain field
      // if the current value is an invalid date string and the previous was a valid date then record changed should be true

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldValidDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = "invalidDate";
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current value is an invalid Date", () => {
      // tests record.changed("publishedAt") ie changes for a certain field
      // if the current value is an invalid Date and the previous was a valid date then record changed should be true

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldValidDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date("invalid");
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current and previous values are Dates", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";
      const newValidDateStr = "2024-11-19T21:03:37.000Z";

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: new Date(oldValidDateStr),
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date(newValidDateStr);
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current date as a string does not have a time and is a different date than previous", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";
      const newValidDateStr = "2024-11-19"; // new date with no time

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldValidDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = newValidDateStr;
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current date as a string does not have a time and is same date as previous", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";
      const newValidDateStr = "2024-04-19"; // same date with no time

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldValidDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = newValidDateStr;
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current date as a Date does not have a time and is a different date than previous", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";
      const newValidDateStr = "2024-11-19"; // new date with no time

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldValidDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date(newValidDateStr);
      expect(product.changed("publishedAt")).toBe(true);
    });

    it("correctly calculates record changed for a certain field when the current date as a Date does not have a time and is same date as previous", () => {
      // tests record.changed("publishedAt") ie changes for a certain field

      const oldValidDateStr = "2024-04-19T21:03:37.000Z";
      const newValidDateStr = "2024-04-19"; // same date with no time

      productBaseRecord = {
        id: "123",
        name: "A cool product",
        body: "A description of why it's cool",
        publishedAt: oldValidDateStr,
      };

      const product = new GadgetRecord<SampleBaseRecord>(productBaseRecord);
      expect(product.changed("publishedAt")).toBe(false);

      product.publishedAt = new Date(newValidDateStr);
      expect(product.changed("publishedAt")).toBe(true);
    });
  });
});
