import { AssertTrue, IsExact } from "conditional-type-checks";
import { DefaultSelection } from "../src/types";
import { AvailableTestSchemaSelection } from "./TestSchema";

type _NullDefault = DefaultSelection<AvailableTestSchemaSelection, { select: null }, { num: true }>;
type _TestDefaultsNullToTheDefault = AssertTrue<IsExact<_NullDefault, { num: true }>>;

type _NonNullDefault = DefaultSelection<AvailableTestSchemaSelection, { select: { num: false; str: true } }, { num: true }>;
type _TestRespectsTruthySelections = AssertTrue<IsExact<_NonNullDefault, { num: false; str: true }>>;

test("true", () => undefined);
