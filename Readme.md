# tiny-graphql-query-compiler

`tiny-graphql-query-compiler` provides a JavaScript-land DSL for constructing GraphQL queries.

Example:

```javascript
import { compile } from "tiny-graphql-query-compiler";

const query = compile({
  type: "query",
  fields: {
    id: true,
    name: true,
    age: true,
  },
});

// query =>
`
query {
  id
  name
  age
}
`;
```

To pass arguments, you can use the `Call` helper:

```javascript
import { compile, Call } from "tiny-graphql-query-compiler";

const query = compile({
  type: "query",
  fields: {
    user: Call(
      { id: 1 },
      {
        id: true,
        name: true,
        age: true,
      }
    ),
  },
});

// query =>
`
query {
  user(id: 1) {
    id
    name
    age
  }
}
`;
```

To pass arguments using GraphQL variables, you can use the `Call` helper with the `Var` helper:

```javascript
import { compile, Call, Var } from "tiny-graphql-query-compiler";

const query = compile({
  type: "query",
  fields: {
    user: Call(
      { id: Var({ type: "ID!" }) },
      {
        id: true,
        name: true,
        age: true,
      }
    ),
  },
});

// query =>
`
query ($id: ID!) {
  user(id: $id) {
    id
    name
    age
  }
}
`;
```

To get back a query and a set of variables to pass to that query, use the `compileWithVariableValues` function, and pass a `value` to each one of your variables:

```javascript
import { compile, Call, Var } from "tiny-graphql-query-compiler";

const { query, variables } = compileWithVariableValues({
  type: "query",
  fields: {
    user: Call(
      { id: Var({ type: "ID!", value: 1 }) },
      {
        id: true,
        name: true,
        age: true,
      }
    ),
  },
});

// query =>
`
query ($id: ID!) {
  user(id: $id) {
    id
    name
    age
  }
}
`;

// variables =>
{
  id: 1;
}

await someClient.execute({ query, variables });
```
