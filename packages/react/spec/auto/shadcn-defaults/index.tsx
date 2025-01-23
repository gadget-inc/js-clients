import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Badge } from "./components/Badge.js";
import { Button } from "./components/Button.js";
import { Checkbox } from "./components/Checkbox.js";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./components/Command.js";
import { Input } from "./components/Input.js";
import { Label } from "./components/Label.js";
import { Toaster } from "./components/Toaster.js";
import { toast } from "./hooks/useToast.js";
import { cn } from "./utils.js";
export type MergeClassNames = (defaultClassNames: string | string[], userClassName?: string) => string;

export const elements: ShadcnElements & { mergeClassNames: MergeClassNames } = {
  Badge,
  Button,
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Input,
  Label,
  toast,
  mergeClassNames: cn,
};

export { Toaster };
