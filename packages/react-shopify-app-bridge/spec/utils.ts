// Test to check if our string has characters outside of ASCII range
// https://stackoverflow.com/questions/13522782/how-can-i-tell-if-a-string-has-any-non-ascii-characters-in-it
export const hasMoreThanAscii = (str: string) => [...str].some((char) => char.charCodeAt(0) > 127);
