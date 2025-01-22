import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Button } from "./components/Button.js";
import { Input } from "./components/Input.js";
import { Label } from "./components/Label.js";
import { Toaster } from "./components/Toaster.js";
import { toast } from "./hooks/useToast.js";

export const elements: ShadcnElements = {
  Button,
  Input,
  Label,
  toast,
};

export { Toaster };
