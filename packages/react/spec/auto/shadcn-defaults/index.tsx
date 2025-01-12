import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Button } from "./components/Button.js";
import { toast } from "./hooks/useToast.js";

export const elements: ShadcnElements = {
  Button,
  toast,
};

export { Toaster } from "./components/Toaster.js";
