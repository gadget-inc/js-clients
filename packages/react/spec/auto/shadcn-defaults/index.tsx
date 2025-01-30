import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Alert, AlertDescription, AlertTitle } from "./components/Alert.js";
import { Badge } from "./components/Badge.js";
import { Button } from "./components/Button.js";
import { Calendar } from "./components/Calendar.js";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/Card.js";
import { Checkbox } from "./components/Checkbox.js";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./components/Command.js";
import { Form } from "./components/Form.js";
import { Input } from "./components/Input.js";
import { Label } from "./components/Label.js";
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "./components/Popover.js";
import { ScrollArea, ScrollBar } from "./components/ScrollArea.js";
import { Skeleton } from "./components/Skeleton.js";
import { Textarea } from "./components/TextArea.js";
import { Toaster } from "./components/Toaster.js";
import { toast } from "./hooks/useToast.js";
import { cn } from "./utils.js";
export type MergeClassNames = (defaultClassNames: string | string[], userClassName?: string) => string;

export const elements: ShadcnElements & { mergeClassNames: MergeClassNames } = {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  ScrollBar,
  Input,
  Label,
  Textarea,
  Form,
  Skeleton,
  toast,
  mergeClassNames: cn,
};

export { Toaster };
