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

```
(Traditional.tsx)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const callerFunc = async () => {
      await axios
        .get('http://localhost:4000/comments/')
        .then((res) => {
          setNewData(res.data)
          setIsLoading(false)
      })
      .catch((error) => {
        setErrorMsg(error.message)
        setIsLoading(false)
      })
    }
    callerFunc();
    return () => console.log("clean-up!")
  }, [])
```

But it's better to write that like this :

```
(Traditional.tsx)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:4000/comments/')
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
    })
    .catch((error) => {
      setErrorMsg(error.message)
      setIsLoading(false)
    })
    return () => console.log("clean-up!")
  }, [])
```

And better again with useQuery (react-query) :

```
(RequestQueryRQ.tsx)

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const RequestQueryFunction = () => {
  ŕeturn axios.get('http://localhost:4000/comments')
}

const RequestQueryRQ = () => {

  const { isLoading, data, isError, error } = useQuery(
    ['comments'], RequestQueryFunction
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) (
    <h2>{error.message}</h2>
  )

}
```

Because useEffect shouldn't be used on client-side with NextJS for fetching data.
To resolve that, you can use SWR or react-query.

---

## Traditional Fetch

```
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = use>State()

    fetch('http://localhost:4000/comments/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch(error => {
        console.error("Error here !", error)
        setError(error)
      })
      .finally(() => setIsLoading(false))
      }
```

## Async Function with Fetch

```
    async function logJSONData() {
      const response = await fetch("http://example.com/movies.json");
      const jsonData = await response.json();
      console.log(jsonData);
    }
```

## Axios with useEffect

```
  ...

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = use>State()

  useEffect(async () => {
    getData();
  }, [])

  async function getData() {
    await axios.get('...')
      .then(res => {
        res.json()
      })
      .then(data => {
        setData(data)
      })
      .catch((err) => {
        console.error("Error", error)
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  ...
```

## React-Query (TanStack)

Keep in mind that :

`const { isLoading, isError, error, data, ... } = useQuery(...)`

useQuery use them and take less lines of code than useState with useEffect :

```
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = use>State()
```
