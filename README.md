# React Boilerplate
React Boilerplate Project With a login page only and based on Clean Architecture.


## Basic application commands
Commands to build, tests e start the app in development mode.

### Runs the app in the development mode
`npm start`

### Launches the test runner in the interactive watch mode
`npm test`

### Builds the app for production to the `build` folder
`npm run build`


## Architectural Division
- cypress/
- src/
  - data/
    - protocols/
    - test/
    - usecases/
  - domain/
    - errors/
    - models/
    - test/
    - usecases/
  - infra/
    - cache/
    - http/
    - test/
  - main/
    - adapters/
    - config/
    - decorators/
    - factories/
      - cache/
      - decorators/
      - http/
      - pages/
      - usecases/
    - routes/
    - scripts/
    - index.tsx
  - presentation/
    - assets/
    - components/
    - hooks/
    - pages/
    - protocols/
    - routes/
    - styles/
    - test/
  - validation/
    - errors/
    - protocols/
    - test/
    - validators/

### In detail, the purpose of each file structure is the following:

- `cypress`: It contains the application's end-to-end test files (for large projects, this folder is recommended to be in a separate project, so that the team responsible for e2e tests can take care of it, as they do not need to know the project code).
- `src`: Contains all files needed for the application.
- `Data`: The data folder represents the data layer of the Clean Architecture, being dependent on the domain layer. Contains the implementations of business rules that are declared in domain.
- `Domain`: Represents the domain layer of the Clean Architecture, the innermost layer of the application, not having any dependency on any other layer, where it contains the business rules.
- `Infra`: This folder contains the implementations referring to the HTTP protocol and the cache, it is also the only place where you will have access to external dependencies related to these two items mentioned. This folder also contains most of the external libraries.
- `Main`: It corresponds to the main layer of the application, where the interfaces developed in the presentation layer are integrated with the business rules created in the folders that represent the innermost layers of the Clean Architecture. All this is due to the use of design patterns such as Factory Method, Composite and Builder.
- `Presentation`: This folder contains the visual part of the application, with its pages, components, hooks, assets and styling.
- `Validation`: Where it contains the implementations of the validations used in the fields.