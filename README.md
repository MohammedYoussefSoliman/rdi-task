# Simple placeholder CRUD

An application used to fetch, add, edit delete from [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/), built with React, Redux-toolkit, TypeScript, react-hook-forms, mui, and emotion.

# Project Status

This project is fulfilled as per the task guid; however, I faced some issues with the returned updated or deleted requests, so I kept there logic commented this could be found on UserForm page.

# Linting and guards

I am using Airbnb code style with some modifications and ESLint is configured. also I am using Husky to perform pre-commit tasks.

# Project Router

I am using react-router-dom v6 with an array routing configuration can be found in routes.ts, also all route components are lazy loaded

# Forms

I am using react-hook-form in building the task form; however, a native configuration is also provided

# App State

This app state is managed by redux-toolkit

# Fetching Technique

I am using axios to fetch data from

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
