---
"@gadgetinc/react": patch
---

Added custom style support to custom column controls in AutoTable

```jsx
const MyAutoTable = () => {
  const columns = [
    {
      header: "Custom header",
      field: "fieldApiIdentifier",
      style: { backgroundColor: "red" },
    },
    {
      header: "Custom cell renderer",
      render: ({ record }) => <div>{record.name}</div>,
      style: { backgroundColor: "blue" },
    },
  ];

  return <AutoTable model={api.myModel} columns={columns} />;
};
```
