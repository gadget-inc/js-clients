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

  // Dynamically enable/disable stylesheets based on active design system
  useEffect(() => {
    const styleSheets = Array.from(document.styleSheets);

    styleSheets.forEach((sheet) => {
      console.log({ sheet });
      try {
        // Vite dev mode uses data-vite-dev-id on the ownerNode (style tag)
        const viteDevId = (sheet.ownerNode as HTMLElement)?.getAttribute?.("data-vite-dev-id") || "";

        // Check both href (production) and vite dev id (dev mode)
        const isPolaris = viteDevId.includes("polaris") && viteDevId.includes("styles.css");
        const isShadcn = viteDevId.includes("shadcn-tailwind.css");

        // Disable Polaris when Shadcn is active
        if (isPolaris) {
          sheet.disabled = designSystem === SUITE_NAMES.SHADCN;
        }

        // Disable Shadcn when Polaris is active
        if (isShadcn) {
          sheet.disabled = designSystem === SUITE_NAMES.POLARIS;
        }
      } catch (e) {
        // Cross-origin stylesheets may throw errors, ignore them
      }
    });
  }, [designSystem]);

  return (
    <DesignSystemContext.Provider value={{ designSystem, updateDesignSystem }}>
      <AppProvider i18n={translations}>
        <div style={{ margin: "16px", gap: "16px", display: "flex", flexDirection: "row" }}>
          <elements.Button onClick={() => updateDesignSystem(SUITE_NAMES.SHADCN)} variant="outline">
            {designSystem === SUITE_NAMES.SHADCN ? "✅ " : ""}Shadcn
          </elements.Button>

          <Button onClick={() => updateDesignSystem(SUITE_NAMES.POLARIS)}>
            {designSystem === SUITE_NAMES.POLARIS ? "✅ " : ""}Polaris
          </Button>
        </div>

        <Suspense>{children}</Suspense>
      </AppProvider>
    </DesignSystemContext.Provider>
  );
};

const darkModeEnabled = false; // TODO - remove this once we commit to doing dark mode

export const ShadcnAutoComponentsThemeControlWrapper = ({ children }: { children: React.ReactNode }) => {
  const setDarkModeGlobally = (isDark: boolean) => {
    // Update root html element dark class
    document.documentElement.classList.toggle("dark", isDark && darkModeEnabled);
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
    <>
      {darkModeEnabled && (
        <div className="flex items-center gap-2 p-2">
          <elements.Button onClick={toggleDarkMode}>Toggle dark mode</elements.Button>
        </div>
      )}

      {children}
    </>
  );
};
