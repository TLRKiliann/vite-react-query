# Vitejs & React-Query

React-Query is a library for fetching data in React.

## Client State VS Server State

- Client State:

Peristed in your app memory and accessing or updating it's synchonous.

- Server State

Persisted remotely & requires asynchonous API's for fetching or updating.

Has shared ownership. (possède une propriété partagée)

Data can be updated by someone else without your knowledge.

UI data may not be in sync with remote data.

Challenging when you have to deal with caching, dedumping multiple requests for the same data, updating stale data in the background, performance optimization etc.

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
State management libraries are not great for working with async server state !
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

React-Query is a library for fatching data in React application.

`const { isLoading, isError, error, data, ... } = useQuery(...)`

useQuery use them and take less lines of code than useState with useEffect :

```
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = use>State()
```

## Cache

With throttling 3G we could see only one time "loading..." with react-query. It's because data are cached
into the browser. Next request the data are directly accessible.

```
{
  cacheTime: 5000
} 
```

help us to see with react-query-devtools activity of network.

Use : console.log(isLoading, isFetching)

isFetching is from useQuery().

```
const RequestQueryRQ:React.FC = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery<ValuesProps>(
    ['comments'], RequestQueryFunction,
    {
      cacheTime: 5000,
    }
  )

  console.log(isLoading, isFetching)
```

You can clear the cache with react-query-devtools by clicking on "clear".
After that, "loading" will appear again in the next display of the RequestQueryRQ page.

You can test {cacheTime: 5000} if you go back to Home page & wait 5 seconds. Loading will appear again, we you go back to RequestQueryRQ page. It's because cache is empty. If you click on RequestQueryRQ from Home page before timeout, you cannot see "Loading..."

If you don't indicate `cacheTime`, useQuery function will erase data after 5 min by default.

---

## Stale

Default `staleTime` is 0 second.

```
{
  staleTime: 30000,
}
```

console.log(isLoading, isFetching) indicate true at first time that we go to the RequestQueryRQ page. During 30s data are fresh, after this time they will be stale. It's useful to reduce network requests during the stale time cupled with the query cache.

---

## refetchOnMount & refetchOnWindowFocus

true, false, "always"

Best option is true.

{
  refetchOnMount: true,
}

{
  refetchOnWindowFocus: true,
}

For update data the best configuration of useQuery() is :

{
  refetchOnMount: true,
  refetchOnWindowFocus: true,
}

---

## Polling (fetching data at regular intervals)

{
  refetchInterval: false,
}

Option by default is false.

if refetchInterval: 3000 => refetch data every 3 seconds.

Go to the RequestQueryRQ page, and you can observe in the console isFetching.