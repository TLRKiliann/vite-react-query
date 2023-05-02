import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const fetchParallelBooks = ({ queryKey }) => {
	const bookId = queryKey[1]
	return axios.get(`http://localhost:4000/books/${bookId}`)
}

const ParallelBook = () => {
	const { bookId } = useParams()
	const { isLoading, data, isError, error } = useQuery(
		['books', bookId], fetchParallelBooks
	);
	
	console.log(data, "------------Books DATA-------------")

	if (isLoading) {
		return <h2>Loading...</h2>
	}

	if (isError) {
		return <h2>{error?.message}</h2>
	}

	return (
		<>
			<h1>Book Parallel</h1>
			<p>{data.data.title} - {data.data.writer}</p>
		</>
	)
}
export default ParallelBook;