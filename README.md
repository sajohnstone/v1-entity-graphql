# v1-entity-graphql
A GraphQL service that works with dynamic schema and pushes data to a custom data adapter

# Getting started

To run the project run the following command

```
npm run dev
```

Once the app has started go to:

http://localhost:3000/graphql

Here is an example query to get started

```
{
  book(id:2) {
   id
   name
  }
}
```

# tests

For running tests I'm using a Postman equivilent for VSCode (https://marketplace.visualstudio.com/items?itemName=humao.rest-client).  Open the .\test\exampleQuery.rest file and select 'Send Request'.

# Links

https://github.com/taion/graphql-type-json
