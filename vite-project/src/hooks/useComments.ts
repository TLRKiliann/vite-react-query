import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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

const useComments = (onSuccess, onError) => {
  return useQuery<ValuesProps>(['comments'], RequestQueryFunction,
    {
      onSuccess,
      onError,
    }
  )
}
export default useComments;