import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Alert, AlertTitle, AlertDescription } from "./components/Alert.js";
import { Button } from "./components/Button.js";
import { Label } from "./components/Label.js";
import { Form } from "./components/Form.js";
import { Input } from "./components/Input.js";
import { Skeleton } from "./components/Skeleton.js";
import { toast } from "./hooks/useToast.js";


export const elements: ShadcnElements = {
  Button,
  Skeleton,
  toast,
  Form,
  Input,
  Alert,
  AlertTitle,
  AlertDescription,
  Label,
};

export { Toaster } from "./components/Toaster.js";
