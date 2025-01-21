import type { ShadcnElements } from "../../../src/auto/shadcn/elements.js";
import { Alert, AlertDescription, AlertTitle } from "./components/Alert.js";
import { Button } from "./components/Button.js";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/Card.js";
import { Checkbox } from "./components/Checkbox.js";
import { Form } from "./components/Form.js";
import { Select } from "./components/Select.js";
import { Input } from "./components/Input.js";
import { Label } from "./components/Label.js";
import { Skeleton } from "./components/Skeleton.js";
import { toast } from "./hooks/useToast.js";

export const elements: ShadcnElements = {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Form,
  Input,
  Label,
  Select,
  Skeleton,
  toast,
};

export { Toaster } from "./components/Toaster.js";
