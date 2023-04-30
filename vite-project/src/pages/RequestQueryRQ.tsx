import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

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
  const {isLoading, data, isError, error} = useQuery<ValuesProps>(
    ['comments'], RequestQueryFunction)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h1>RequestQuery with React-Query</h1>
      <h2>Result of request :</h2>
      {data?.data.map((d) => (
        <div key={d.id}>
          <p>ID: {d.id}</p>
          <p>BODY: {d.body}</p>
          <p>POSTID: {d.postId}</p>
        </div>
        )
      )}
    </div>
  )
}
export default RequestQueryRQ;
