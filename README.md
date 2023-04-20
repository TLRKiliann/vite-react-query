# Vitejs & React-Query

## Install

$ pnpm create vite

> React

> TypeScript

```
  cd vite-project
  pnpm install
  pnpm run dev
```

$ pnpm install react-router-dom

$ pnpm install --save-dev json-server

$ pnpm add axios

$ pnpm add @tanstack/react-query

$ pnpm add @tanstack/react-query-devtools

## json-server

Add in scripts of `package.json`

`"server": "json-server --watch db.json --port 4000",`

$ pnpm run server

Enter localhost:4000/comments in your browser

## @tanstack/react-query (with axios)

One page : Traditional (query)

Another page : RequestQuery (@tanstack/react-query)

$ pnpm add @tanstack/react-query-devtools

