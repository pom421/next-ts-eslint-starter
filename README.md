This is an [Next.js](https://nextjs.org/) opinionated starter with ESLint, Prettier, Typescript, Jest, testing-libray already configured out of the box.
All is configured to run in VS Code, with some goodies.

- absolute imports managed by VS Code, Next and Jest
- lint which triggers Prettier formating
- VS Code goodies :
  - lint automatic at save
  - exclusion of temporary directories (.next, node_modules, .history if you use this plugin)
- Next :
  - all code (except /public) is in src/ directory
- useful scripts in package.json
  - lint
  - test
  - check-all: run in sequence lint, TS compilation and tests
  - fresh-install: remove temporary folders and reinstall packages
- GitHub action:
  - CI : to check lint, ts, tests and to run the build
  - release : to make a new release after each commit beggining with feat: or fix: (see conventional commit)
## Nota bene

All pages must end with a .page.tsx extension.
All api must end with a .api.ts extension.

This enables to have other files in pages or api, which are note page or api endpoint, to be used as utilities or test and leverage colocation.

## Usage

For dev :

```
yarn create next-app --example https://github.com/pom421/next-ts-eslint-starter my-app
cd my-app
yarn
yarn dev
```

For prod :

```
yarn build
yarn start // yarn export for a static site only
```


