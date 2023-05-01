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

const catchApiId = ({queryKey}: number) => {
  const commentId = queryKey[1]
	return axios.get(`http://localhost:4000/comments/${commentId}`)
}

const useComment = (commentId: number) => {
	return useQuery(["comments", commentId], catchApiId)
}
export default useComment;

/*
const catchApiId = (commentId: number) => {
  return axios.get(`http://localhost:4000/comments/${commentId}`)
}
const useComment = (commentId: number) => {
  return useQuery(["comments", commentId], () => catchApiId(commentId))
}
*/