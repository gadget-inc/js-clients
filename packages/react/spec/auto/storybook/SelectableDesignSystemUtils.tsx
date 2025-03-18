import { AppProvider, Button } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import React, { Suspense, useEffect, useState } from "react";
import { SUITE_NAMES } from "../../../cypress/support/constants.js";
import { elements } from "../shadcn-defaults/index.js";

type DesignSystemContextType = {
  designSystem: string;
  updateDesignSystem: (value: string) => void;
};

const DesignSystemContext = React.createContext<DesignSystemContextType | undefined>(undefined);

export const useDesignSystem = () => {
  const context = React.useContext(DesignSystemContext);
  if (!context) {
    throw new Error("useDesignSystem must be used within a DesignSystemProvider");
  }
  return context;
};

export const DesignSystemSelectionControl = ({ children }: { children: React.ReactNode }) => {
  const [designSystem, setDesignSystem] = useState<string>(localStorage.getItem("designSystem") ?? SUITE_NAMES.SHADCN);
  const updateDesignSystem = (value: string) => {
    localStorage.setItem("designSystem", value);
    setDesignSystem(value);
  };

  return (
    <DesignSystemContext.Provider value={{ designSystem, updateDesignSystem }}>
      <AppProvider i18n={translations}>
        <div style={{ marginBottom: "16px", gap: "16px", display: "flex", flexDirection: "row" }}>
          <body>
            <elements.Button onClick={() => updateDesignSystem(SUITE_NAMES.SHADCN)} variant="outline">
              {designSystem === SUITE_NAMES.SHADCN ? "✅ " : ""}Shadcn
            </elements.Button>
          </body>
          <Button onClick={() => updateDesignSystem(SUITE_NAMES.POLARIS)}>
            {designSystem === SUITE_NAMES.POLARIS ? "✅ " : ""}Polaris
          </Button>
        </div>

        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </AppProvider>
    </DesignSystemContext.Provider>
  );
};

export const ShadcnAutoComponentsThemeControlWrapper = ({ children }: { children: React.ReactNode }) => {
  const setDarkModeGlobally = (isDark: boolean) => {
    // Update root html element dark class
    document.documentElement.classList.toggle("dark", isDark);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !(localStorage.getItem("darkMode") === "true");
    localStorage.setItem("darkMode", newDarkMode.toString());
    setDarkModeGlobally(newDarkMode);
  };

  useEffect(() => {
    setDarkModeGlobally(localStorage.getItem("darkMode") === "true");
  }, []);

  return (
    <body>
      <div className="flex items-center gap-2 p-2">
        <elements.Button onClick={toggleDarkMode}>Toggle dark mode</elements.Button>
      </div>

      {children}
    </body>
  );
};
