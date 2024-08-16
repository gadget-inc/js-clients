---
"@gadgetinc/react": patch
---

Updated PolarisAutoSubmit to expose Polaris button props

Example - Using props from `https://polaris.shopify.com/components/actions/button#props`

```jsx
import { AutoForm, AutoSubmit } from "@gadgetinc/react/auto/polaris";

const Component = () => {
  return (
    <AutoForm>
      <AutoSubmit size="micro" textAlign="left" tone="critical" variant="plain" />
    </AutoForm>
  );
};
```
