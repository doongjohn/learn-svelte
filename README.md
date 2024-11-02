# learn-svelte

<https://doongjohn.github.io/learn-svelte>

## Creating a project

```sh
pnpx sv create project-name
cd project-name
pnpm i
```

## Developing

```sh
pnpm run dev
```

## Building

```sh
pnpm run build
```

```sh
pnpm run preview
pnpx http-server ./build
```

## Deploy to Github Pages

- Use `adapter-static` and set fallback to `404.html` for CSR.
- In `svelte.config.js` set `paths.base` to `process.env.NODE_ENV === 'development' ? '' : '/repo-name'`.
- Use `import { base } from '$app/paths'` for `href` links.
- Add `.nojekyll` in the `static/` folder.

Install `gh-pages`.
```sh
pnpm i -D gh-pages
```

Add a deploy script to `package.json`.
```json
  "scripts": {
    ...
    "deploy": "vite build && gh-pages -d build -t true"
  },
```

> [!NOTE]
> Option `-t` must be `true` to include `.nojekyll`.

```sh
pnpm run deploy
```
