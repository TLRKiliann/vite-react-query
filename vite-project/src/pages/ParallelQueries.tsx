import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'


const fetchParallelComments = () => {
	return axios.get('http://localhost:4000/comments')
}

const fetchParallelBooks = () => {
	return axios.get('http://localhost:4000/books')
}

const ParallelQueries:React.FC = () => {
	const { data:comments } = useQuery<CommentsProps>({queryKey: ['comments'], queryFn: fetchParallelComments})
	const { isLoading, isError, error, data:books } = useQuery<BooksProps>({queryKey: ['books'], queryFn: fetchParallelBooks})

	const commentsy = comments?.data
	const booksy = books?.data

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (isError) {
		return <h1>{error?.message}</h1>
	}

	return (
		<>
			<h1>ParallelQueries</h1>
			
			<h2>Comments</h2>			
			{commentsy?.map((comment) => (
				<li key={comment.id}>
					<Link
						to={`/req-parallel-commentid/${comment.id}`} 
						style={{color: 'yellow', textDecoration: 'none'}}
					>
						{comment.text}
					</Link>
				</li>
			))}
			<h2>Books</h2>
			{booksy?.map((book) => (
				<li key={book.id}>
					<Link
						to={`/req-parallel-bookid/${book.id}`}
						style={{color: 'lightgreen', textDecoration: 'none'}}
					>
						{book.title}
					</Link>
				</li>
			))}
			
		</>
	)
}
export default ParallelQueries;