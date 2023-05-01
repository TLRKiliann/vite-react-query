import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import useComment from '../hooks/useComment'

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

const RequestQueryRQId:React.FC = () => {
	const { commentId } = useParams()
	const { isLoading, data, isError, error } = useComment<ValuesProps>(commentId)

	if (isLoading) {
		return <h2>Loading...</h2>
	}

	if (isError) {
		return <h2>{error.message}</h2>
	}

	return (
		<div>
			<h1>Hello comment id</h1>
			<p style={{color: "lightgreen"}}>
				Text: {data.data.text} - Author: {data.data.author}
			</p>
		</div>
	)
}
export default RequestQueryRQId;