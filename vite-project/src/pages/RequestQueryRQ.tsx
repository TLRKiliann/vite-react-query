import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useSuperHook from '../hooks/useSuperHook'

type ValuesProps = {
  isLoading: boolean;
  data: {
    id: number;
    body: string;
    postId: number;
  }
  isError: boolean;
  error: {
    message: string;
  }
}

const RequestQueryFunction = () => {
  return axios.get('http://localhost:4000/comments') 
}

const RequestQueryRQ:React.FC = () => {

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data)
  }

  const onError = (error) => {
    console.log("Perform side effect after encountering an error", error)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHook<ValuesProps>(onSuccess, onError);

  console.log("isLoading : ", isLoading, "isFetching : ", isFetching)

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h1>RequestQuery with React-Query</h1>
      <h2>Result of request :</h2>
      <button type="button" onClick={refetch}>Fetch Data</button>
      {data?.data.map((d) => (
        <div key={d.id}>
          <p>ID: {d.id}</p>
          <p>BODY: {d.body}</p>
          <p>POSTID: {d.postId}</p>
        </div>
        )
      )}
    </>
  )
}
export default RequestQueryRQ;
