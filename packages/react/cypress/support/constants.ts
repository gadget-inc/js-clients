export const SUITE_NAMES = {
  SHADCN: "Shadcn",
  POLARIS: "Polaris",
} as const;

export const TEST_SUITES = {
  [SUITE_NAMES.SHADCN]: ["AutoButton"],
} as const;
