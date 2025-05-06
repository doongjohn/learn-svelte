# learn-svelte

<https://doongjohn.github.io/learn-svelte>

## Creating a project

```sh
pnpm dlx sv create project-name
cd project-name
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
```

## Deploy to Github Pages

- In `svelte.config.js` change adapter to `adapter-static` and set fallback to `'404.html'` for CSR.
    ```sh
    pnpm add -D @sveltejs/adapter-static
    ```
    ```js
    adapter: adapter({
      fallback: '404.html'
    }),
    ```
- In `svelte.config.js` set `paths.base` to `process.env.NODE_ENV === 'development' ? '' : '/repo-name'`.
    ```js
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : '/repo-name'
    }
    ```
- Use `import { base } from '$app/paths'` for `href` links.
- Add `.nojekyll` in the `static/` folder.
- Add a deploy script using `gh-pages` to `package.json`.
    ```sh
    pnpm add -D gh-pages
    ```
    ```jsonc
      "scripts": {
        // ...
        "deploy": "vite build && gh-pages -d build -t"
      },
    ```
    ```sh
    pnpm run deploy
    ```

> [!NOTE]
> Option `-t` must be used to include `.nojekyll`.
