# Starter Pack
> WIP

> A Production ready React app starter pack.
> 
> This is a template using Vite, Typescript, Sass and some basic configurations.
> 
> This is made with the aim of creating a new application faster, allowing to focus directly on the core of the new project and not waste unnecessary time setting up tedious code.


## Technologies & libraries used

|Usage|Name|Version|
|-|-|-|
|Framework|React.js|18.2.0
|Builder|Vite.js|4.2.1
|Language|Typescript|4.9.3
|Style|Sass|1.60.0
|Cache management|ReactQuery|4.28.0
|Formatter|Prettier|2.8.4
|Package manager|Npm|8.19.2
|UI library|Ant Design|5.3.3
|HTTP requests|Axios|1.3.4
|Forms|Formik|2.2.9
|Form validation|Yup|1.0.2
|Date management|Dayjs|1.11.7
|Responsive rendering|React Responsive|9.0.2
|Changelog|Standard Version|9.5.0

## Architecture

- public
  - vite.svg
- src
  - assets
    - img
    - svg
  - components
    - component
      - component.scss
      - component.tsx
    - index.tsx
  - interfaces
    - index.tsx
  - pages
    - index.tsx
  - services
    - index.tsx
  - styles
    - base.scss
    - flexbox.scss
    - grid.scss
    - index.scss
    - variables.scss
  - utils
    - index.tsx
  - App.tsx
  - main.tsx
  - vite-env.d.ts
- index.html
- package.json
- prettier.config.cjs
- tsconfig.json
- tsconfig.node.json
- vite-env.d.ts
- vite.config.ts

## Installation

1. Clone the repo
```bash
git clone https://github.com/Zararthustra/Starter-pack_React
```

2. Change the project name (referenced as `MY_PROJECT`)

3. Install locally
```bash
npm install
```

4. Run dev server
```bash
npm run dev
```

5. Build static files
```bash
npm run build
```

6. Release version (click [here](https://github.com/conventional-changelog/standard-version) for more details about Standard Version)
```bash
npm run release
```

```bash
npm run release -- --release-as X.Y.Z
```