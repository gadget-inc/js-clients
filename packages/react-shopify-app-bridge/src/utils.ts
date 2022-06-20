import { isBoolean, isNull, isNumber, isUndefined } from "lodash";

/**
 * General purpose fast hashing function that works in the browser and in node.
 * Credit https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 **/
 export const cyrb53 = (str: string, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  };

/**
 * Utility to produce a content hash from a list of a model's values which define it's content
 */
 export const contentHash = Object.assign(
    (values: (string | number | boolean | null | undefined)[]) => {
      const stringified = values.map((value) => {
        if (isNull(value)) return "<<null>>";
        if (isUndefined(value)) return "<<undefined>>";
        if (isBoolean(value)) return `<<${String(value)}>>`;
        if (isNumber(value)) return `##${String(value)}`;
        return value;
      });
  
      const hash = cyrb53(stringified.join("///"));
  
      // when we want to diagnose why content hashes don't match, this lets us compare the whole tree of values that went into a hash. it's just slow so we only activate this during the tests
      if (contentHash.includeDebugInfo) {
        contentHash.debugInfos[hash] = values.map((value) => {
          if (isNumber(value) && contentHash.debugInfos[value]) {
            return contentHash.debugInfos[value];
          } else {
            return value;
          }
        });
      }
  
      return hash;
    },
    {
      debugInfos: {} as { [hash: number]: any[] },
      includeDebugInfo: false,
    }
  );

export const getTokenKey = (gadgetAppUrl: string, host: string) => contentHash([gadgetAppUrl, host]);