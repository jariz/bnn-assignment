# <img src="./public/logo.webp" width="48"> BNN pokedex

## Deployed version

https://bnn-assignment.vercel.app/

## Running locally

Install using Yarn v1
```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

This project uses storybook, run it as follows:

```bash
yarn storybook
```

## Codegen

This project uses graphql-codegen to ensure end-to-end schema typing.  
It generates a SDK that can be called from server components.

Add/modify queries/mutations in `src/gql` and then run the following to see it reflected in the generated code:

```bash
yarn codegen
```
## Tests (jest)

This project uses jest tests to test the auto generated SDK to confirm if the queries actually work.

```bash
yarn test
```
