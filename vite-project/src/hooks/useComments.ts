import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ValuesProps } from '../type/data.type'
import { SuccessErrorTypes } from '../type/data.type'

const RequestQueryFunction = () => {
  return axios.get('http://localhost:4000/comments') 
}

const useComments = (onSuccess: SuccessErrorTypes, onError: SuccessErrorTypes) => {
  return useQuery<ValuesProps>(['comments'], RequestQueryFunction,
    {
      onSuccess,
      onError,
    }
  )
}
export default useComments;