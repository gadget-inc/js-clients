export interface BrowserStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
/**
 * Implements part of the `window.localStorage` api, but in memory such that the stored values are lost as soon as the JS VM's life ends
 **/
export declare class InMemoryStorage implements BrowserStorage {
    values: Record<string, string>;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
