export const getStepFromNumberOfDecimals = (numberOfDecimals: number) =>
  numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);

export const countNumberOfDecimals = (value: string) => {
  if (value.includes("e")) {
    // +e scientific notation for large numbers does not get decimal steps
    return 0;
  }
  const [, decimals] = value.split(".");
  return decimals?.length ?? 0;
};
