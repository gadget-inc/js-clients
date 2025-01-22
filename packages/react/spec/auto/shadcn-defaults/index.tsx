import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Alert, AlertDescription, AlertTitle } from "./components/Alert.js";
import { Button } from "./components/Button.js";
import { Checkbox } from "./components/Checkbox.js";
import { Form } from "./components/Form.js";
import { Input } from "./components/Input.js";
import { Label } from "./components/Label.js";
import { Skeleton } from "./components/Skeleton.js";
import { Toaster } from "./components/Toaster.js";
import { toast } from "./hooks/useToast.js";

export const elements: ShadcnElements = {
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
  Checkbox,
  Input,
  Label,
  Form,
  Skeleton,
  toast,
};

export { Toaster };
