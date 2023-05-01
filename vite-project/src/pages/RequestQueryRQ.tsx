import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useComments from '../hooks/useComments'

type ValuesProps = {
  isLoading: boolean;
  data: {
    id: number;
    text: string;
    author: number;
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

  const { isLoading, data, isError, error, isFetching, refetch } = useComments<ValuesProps>(
    onSuccess, 
    onError
  );

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
      {data?.data.map((comment) => (
        <li key={comment.id} style={{marginTop: "20px"}}>
          <Link to={`/request-rq/${comment.id}`} style={{textDecoration: "none", color: "cyan"}}>
            Text: {comment.text} - Author: {comment.author}
          </Link>
        </li>
        )
      )}
    </>
  )
}
export default RequestQueryRQ;
