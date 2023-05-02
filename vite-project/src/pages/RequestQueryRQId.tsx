import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import useComment from '../hooks/useComment'
import { ValuesProps } from '../type/data.type'
import { ParamsProps } from '../type/data.type'
import { DataTypes } from '../type/data.type'


const RequestQueryRQId:React.FC = () => {
	
	const onSuccess = (data: DataTypes) => {
		console.log("Success", data)
	}

	const onError = (error: string) => {
		console.log("Error", error)
	}

	const { commentId } = useParams<ParamsProps>()
	const { isLoading, data, isError, error, isFetching } = useComment<ValuesProps>(commentId, onSuccess, onError)

	console.log("isLoading id : ", isLoading, "isFetching id : ", isFetching)

	if (isLoading || isFetching) {
		return <h2>Loading...</h2>
	}

	if (isError) {
		return <h2>{error.message}</h2>
	}

	return (
		<div>
			<h1>Hello comment id</h1>
			<p style={{color: "lightgreen"}}>
				Text: {data.data.text} - Author: {data.data.writer}
			</p>
		</div>
	)
}
export default RequestQueryRQId;