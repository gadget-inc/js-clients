export const withWindowMissingSupport = (key: keyof typeof window, run: () => void) => {
  const old = window[key];
  try {
    delete window[key];
    return run();
  } finally {
    (window as any)[key] = old;
  }
};

export const base64 = (str: string) => Buffer.from(str).toString("base64");
