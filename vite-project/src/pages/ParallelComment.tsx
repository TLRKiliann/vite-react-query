import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const fetchParallelComment = ({ queryKey }) => {
	const commentId = queryKey[1]
	return axios.get(`http://localhost:4000/comments/${commentId}`)
}

const ParallelComment = () => {

	const { commentId } = useParams()
	const {isLoading, data, isError, error } = useQuery(
		['comments', commentId], fetchParallelComment
	);

	console.log(data, "------------Comment DATA-------------")

	if (isLoading) {
		return <h2>Loading...</h2>
	}

	if (isError) {
		return <h2>{error?.message}</h2>
	}

	return (
		<>
			<h1>Book Parallel</h1>
			<p>{data.data.text} - {data.data.author}</p>
		</>
	)
}
export default ParallelComment;