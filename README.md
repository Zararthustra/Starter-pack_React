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

```bash
src
|   App.tsx
|   main.tsx
|   vite-env.d.ts
|
+---assets
|   |   index.ts
|   |
|   +---img
|   |       blank_profile.png
|   |       customer1.png
|   |       customer2.png
|   |       ...
|   |
|   \---svg
|           IconArrowRight.tsx
|           IconBurger.tsx
|           IconClose.tsx
|           ...
|
+---components
|   |   index.tsx
|   |
|   +---Button
|   |       Button.scss
|   |       Button.tsx
|   |
|   +---Component
|   |       Component.scss
|   |       Component.tsx
|   |
|   +---Modals
|   |       ModalReloadSW.tsx
|   |
|   \---Sidebar
|           Sidebar.scss
|           Sidebar.tsx
|
+---interfaces
|       icon.interface.ts
|       index.ts
|
+---pages
|   |   index.tsx
|   |
|   \---Home
|           Home.scss
|           Home.tsx
|
+---queries
|       axios.ts
|       index.ts
|       queryTemplate.ts
|
+---services
|       AppContext.tsx
|       AppWrapper.tsx
|       localStorageService.ts
|
+---styles
|       base.scss
|       flexbox.scss
|       grid.scss
|       index.scss
|       variables.scss
|
\---utils
        formatters.tsx
```

## Installation

1. Clone the repo
```bash
git clone https://github.com/Zararthustra/Starter-pack_React.git
```

1. Duplicate this directory with a different project name (referenced as `MY_PROJECT`)

2. Install dependencies
```bash
npm install
```

1. Run dev server
```bash
npm run dev
```

1. Build static files
```bash
npm run build
```

1. Release version (click [here](https://github.com/conventional-changelog/standard-version) for more details about Standard Version)
```bash
npm run release
```

```bash
npm run release -- --release-as X.Y.Z
```