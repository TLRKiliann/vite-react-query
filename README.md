# Vitejs & React-Query

## Install

`$ pnpm create vite`

Choose:

> React

> TypeScript

Then enter the commands (cmd) below :

```
  cd vite-project
  pnpm install
  pnpm run dev
```

## Copy from GitHub repository

`git clone ...[key_repo]`

`cd vite-react-query/vite-project`

`$ pnpm install`

## Module Installation

`$ pnpm install react-router-dom`

`$ pnpm add axios`

`$ pnpm install --save-dev json-server`

`$ pnpm add @tanstack/react-query`

`$ pnpm add @tanstack/react-query-devtools`

## Json-Server

Add in scripts of `package.json`

`"server": "json-server --watch db.json --port 4000",`

`$ pnpm run server`

Enter localhost:4000/comments in your browser to see if the page display data from comments

## @tanstack/react-query (with axios)

One page : Traditional (query)

Another page : RequestQuery (@tanstack/react-query)

# How to launch this app ?

It's quite simple.

Run the cmd :

`$ pnpm run server`

in a console & run this cmd 

`$ pnpm run dev`

in another one.

Data should be appear in your browser interface.

