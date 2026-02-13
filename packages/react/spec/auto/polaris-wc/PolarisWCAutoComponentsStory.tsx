import React, { useEffect, useState, type ReactNode } from "react";

export interface UsePolarisWCScriptOptions {
  /**
   * Maximum time to wait for the script to load (in milliseconds)
   * @default 10000
   */
  maxWaitTime?: number;
  /**
   * Whether to load the script if it doesn't exist. If false, only checks for existing script.
   * @default true
   */
  shouldLoadScript?: boolean;
  /**
   * Polling interval for checking if custom elements are defined (in milliseconds)
   * @default 100
   */
  pollInterval?: number;
}

const POLARIS_WC_SCRIPT_URL = "https://cdn.shopify.com/shopifycloud/polaris.js";
const POLARIS_WC_ELEMENT_NAME = "s-button";

/**
 * Hook to ensure Polaris web components script is loaded and ready.
 * Returns whether the script is loaded and custom elements are available.
 *
 * @param options Configuration options for script loading behavior
 * @returns boolean indicating if Polaris web components are ready
 */
export const usePolarisWCScript = (options: UsePolarisWCScriptOptions = {}): boolean => {
  const { maxWaitTime = 10000, shouldLoadScript = true, pollInterval = 100 } = options;

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    let checkInterval: ReturnType<typeof setInterval> | null = null;
    const startTime = Date.now();

    const checkCustomElements = () => {
      // Check if a Polaris web component is defined (e.g., s-button)
      if (customElements.get(POLARIS_WC_ELEMENT_NAME)) {
        setScriptLoaded(true);
        if (checkInterval) {
          clearInterval(checkInterval);
        }
        return true;
      }

      // Timeout after maxWaitTime
      if (Date.now() - startTime > maxWaitTime) {
        console.warn("Polaris web components did not load within timeout period");
        setScriptLoaded(true); // Still render, might work anyway
        if (checkInterval) {
          clearInterval(checkInterval);
        }
        return true;
      }

      return false;
    };

    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${POLARIS_WC_SCRIPT_URL}"]`);
    if (existingScript) {
      // Script exists, wait for custom elements to be defined
      if (!checkCustomElements()) {
        checkInterval = setInterval(() => {
          if (checkCustomElements()) {
            clearInterval(checkInterval!);
          }
        }, pollInterval);
      }
      return () => {
        if (checkInterval) {
          clearInterval(checkInterval);
        }
      };
    }

    // Load the script if it doesn't exist and shouldLoadScript is true
    if (shouldLoadScript) {
      const script = document.createElement("script");
      script.src = POLARIS_WC_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        // Wait for custom elements to be defined
        if (!checkCustomElements()) {
          checkInterval = setInterval(() => {
            if (checkCustomElements()) {
              clearInterval(checkInterval!);
            }
          }, pollInterval);
        }
      };
      script.onerror = () => {
        console.error("Failed to load Polaris web components script");
        setScriptLoaded(true); // Still render to show error state
      };
      document.head.appendChild(script);
    } else {
      // If we shouldn't load the script, just check if elements are already available
      if (!checkCustomElements()) {
        checkInterval = setInterval(() => {
          if (checkCustomElements()) {
            clearInterval(checkInterval!);
          }
        }, pollInterval);
      }
    }

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    };
  }, [maxWaitTime, shouldLoadScript, pollInterval]);

  return scriptLoaded;
};

export interface PolarisWCAutoComponentsStoryProps {
  /**
   * The content to render once the Polaris web components script is loaded
   */
  children: ReactNode;
  /**
   * Custom loading message to display while the script is loading
   */
  loadingMessage?: string;
}

/**
 * A wrapper component that ensures Polaris web components script is loaded
 * before rendering its children. Use this in storybook stories for PolarisWC components.
 *
 * @example
 * ```tsx
 * export const MyStory = {
 *   render: () => (
 *     <PolarisWCAutoComponentsStory>
 *       <MyPolarisWCComponent />
 *     </PolarisWCAutoComponentsStory>
 *   ),
 * };
 * ```
 */
export const PolarisWCAutoComponentsStory = ({
  children,
  loadingMessage = "Loading Polaris web components...",
}: PolarisWCAutoComponentsStoryProps) => {
  const scriptLoaded = usePolarisWCScript({
    maxWaitTime: 10000,
    shouldLoadScript: true,
  });

  if (!scriptLoaded) {
    return <div>{loadingMessage}</div>;
  }

  return <>{children}</>;
};
