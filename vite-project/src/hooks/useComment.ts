import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ValuesProps } from '../type/data.type'
import { SuccessErrorTypes } from '../type/data.type'

const catchApiId = ({queryKey}: string) => {
  const commentId = queryKey[1]
	return axios.get(`http://localhost:4000/comments/${commentId}`)
}

const useComment = (commentId: string, onSuccess: SuccessErrorTypes, onError: SuccessErrorTypes) => {
	return useQuery<ValuesProps>(["comments", commentId], catchApiId, {
    onSuccess,
    onError
  })
}
export default useComment;

/*
const catchApiId = (commentId: string) => {
  return axios.get(`http://localhost:4000/comments/${commentId}`)
}
const useComment = (commentId: string) => {
  return useQuery<ValuesProps>(["comments", commentId], () => catchApiId(commentId))
}
*/