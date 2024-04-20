# Starter Pack

> WIP

> A Production ready React app starter pack.
>
> This is a template using Vite, Typescript, Tailwind and some basic
> configurations.
>
> This is made with the aim of creating a new application faster, allowing to
> focus directly on the core of the new project and not waste unnecessary time
> setting up tedious code.

## Technologies & libraries used

| Usage                | Name             | Version |
| -------------------- | ---------------- | ------- |
| Framework            | React.js         | 18.2.0  |
| Builder              | Vite.js          | 5.2.10  |
| Language             | Typescript       | 5.4.5   |
| Style                | Tailwind         | 3.4.3   |
| Cache management     | ReactQuery       | 5.29.2  |
| Formatter            | Prettier         | 3.2.5   |
| Package manager      | Npm              | 10.5.0  |
| UI library           | Ant Design       | 5.16.2  |
| HTTP requests        | Axios            | 1.6.8   |
| Forms                | Formik           | 2.4.5   |
| Type validation      | Yup              | 1.4.0   |
| Date management      | Dayjs            | 1.11.10 |
| Responsive rendering | React Responsive | 10.0.0  |
| Changelog            | Standard Version | 9.5.0   |

## Architecture

```bash
src
│   App.tsx
│   main.tsx
│   vite-env.d.ts
│
├───assets
│   │   index.ts
│   │
│   ├───img
│   │       blank_profile.png
│   │       customer1.png
│   │       customer2.png
│   │       ...
│   │
│   └───svg
│           IconArrowRight.tsx
│           IconBurger.tsx
│           IconClose.tsx
│           ...
│
├───components
│   │   Button.tsx
│   │   ComponentTemplate.tsx
│   │   DarkModeToggle.tsx
│   │   index.tsx
│   │   Sidebar.tsx
│   │
│   └───modals
│           ModalReloadSW.tsx
│
├───interfaces
│       icon.interface.ts
│       index.ts
│
├───pages
│   │   index.tsx
│   │   NotFound.tsx
│   │
│   └───Home
│           Home.tsx
│
├───queries
│       axios.ts
│       index.ts
│       query.template.ts
│
├───services
│       AppContext.tsx
│       AppWrapper.tsx
│       localStorageService.ts
│
├───styles
│       base.css
│       index.css
│
└───utils
        formatters.tsx
```

## Installation

- Clone the repo

```bash
git clone https://github.com/Zararthustra/Starter-pack_React.git
```

- Install dependencies

```bash
npm install
```

- Run dev server

```bash
npm run dev
```

- Run linters

```bash
npm run lint
```

- Run tests

```bash
npm run test
```

- Build static files

```bash
npm run build
```

- Release version (click
  [here](https://github.com/conventional-changelog/standard-version) for more
  details about Standard Version)

```bash
npm run release
```

```bash
npm run release -- --release-as X.Y.Z
```
