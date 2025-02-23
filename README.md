# Noise Mines Paris - Frontend repository

This repository contains the codebase that implement our web interface, available at : INSERT URL.

## Setup the project

### Requirements

- Git CLI
- Node js (we use `npm` to manage our dependencies)

### Install the repository

1. Download the repository

   ```bash
   git clone git@github.com:noise-mines-paris/frontend.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

This will generate a `package-lock.json` file and download node modules under `node_modules`.

### Run the frontend

To run the codebase on your localhost :

```bash
npm run dev
```

By default, the project will run on `locahost:5173`.

To build the project :

```bash
npm run build
```

To preview the rendering of the build :

```bash
npm run preview
```

By default, the build will run on `locahost:4173`.

## Get involved into the project

### Setup your IDE

Install the VSCode extensions recommended in the `.vscode/extensions.json` file, or directly in the `RECOMMENDED` section of the `Extensions` tab of your IDE.

### Eslint and prettier

We use Eslint to implement constraints, and prettier to format the code.
Your code is automatically checked and formatted in the `pre-commit`.

You can manually run the following scripts to make your code consistent :

```bash
npm run lint # Perform an Eslint check
npm run lint:fix # Perform an Eslint check and try to resolve the issues
npm run format:check # Perform a Prettier check
npm run format # Format the codebase accordingly to the .prettierrc configuration
```
