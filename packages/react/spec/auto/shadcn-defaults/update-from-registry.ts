import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = path.join(__dirname, "components");
const REGISTRY_BASE_URL = "https://ui.shadcn.com/r/styles/new-york-v4";

interface RegistryFile {
  path: string;
  content: string;
  type: string;
}

interface RegistryResponse {
  name: string;
  type: string;
  dependencies?: string[];
  files: RegistryFile[];
}

async function fetchComponentFromRegistry(componentName: string): Promise<string | null> {
  const url = `${REGISTRY_BASE_URL}/${componentName}.json`;

  try {
    console.log(`Fetching ${componentName} from ${url}...`);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Failed to fetch ${componentName}: ${response.status} ${response.statusText}`);
      return null;
    }

    const data: RegistryResponse = await response.json();

    // Find the UI component file (usually the first one with type "registry:ui")
    const componentFile = data.files.find((f) => f.type === "registry:ui");

    if (!componentFile) {
      console.error(`No UI component found in registry for ${componentName}`);
      return null;
    }

    return componentFile.content;
  } catch (error) {
    console.error(`Error fetching ${componentName}:`, error);
    return null;
  }
}

function updateImports(content: string): string {
  let updated = content;

  // Replace the @/lib/utils import with ../utils.js
  updated = updated.replace(/import\s+{([^}]+)}\s+from\s+["']@\/lib\/utils["']/g, 'import {$1} from "../utils.js"');

  // Remove "use client" directive
  updated = updated.replace(/^["']use client["']\s*\n*/m, "");

  // Remove leading newlines
  updated = updated.replace(/^\n+/, "");

  return updated;
}

function getRegistryName(fileName: string): string {
  // Convert file name to component name (e.g., Accordion.tsx -> accordion)
  const baseName = fileName.replace(/\.tsx?$/, "");

  // Handle special cases where the registry name differs from the file name
  const specialCases: Record<string, string> = {
    DropdownMenu: "dropdown-menu",
    TextArea: "textarea",
    Toaster: "sonner",
  };

  if (specialCases[baseName]) {
    return specialCases[baseName];
  }

  // Convert PascalCase to kebab-case
  return baseName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

async function updateComponent(fileName: string): Promise<void> {
  // Get the registry name for this component
  const componentName = getRegistryName(fileName);

  console.log(`\n--- Processing ${fileName} (${componentName}) ---`);

  // Fetch from registry
  const content = await fetchComponentFromRegistry(componentName);

  if (!content) {
    console.log(`Skipping ${fileName} - could not fetch from registry`);
    return;
  }

  // Update imports
  const updatedContent = updateImports(content);

  // Write to file
  const filePath = path.join(COMPONENTS_DIR, fileName);
  fs.writeFileSync(filePath, updatedContent, "utf-8");

  console.log(`✓ Updated ${fileName}`);
}

async function updateAllComponents(): Promise<void> {
  // Read all component files
  const files = fs.readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));

  console.log(`Found ${files.length} component files to update`);

  // Update each component sequentially
  for (const file of files) {
    await updateComponent(file);
  }

  console.log("\n✓ All components updated!");
}

// Run the script
updateAllComponents().catch((error) => {
  console.error("Error updating components:", error);
  process.exit(1);
});
