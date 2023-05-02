import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchEmailById = (email) => {
	return axios.get(`https://localhost:4000/users/${email}`)
}

const fetchCoursByChannel = (channel) => {
	return axios.get(`http://localhost:4000/channels/${courses}`)
}

const DependentQuery = ({ email }) => {
	const { data: user } = useQuery(['user', email], () => fetchEmailById(email))

	const channel = user?.data.channel

	useQuery(['courses', channel], () => fetchCoursByChannel(channel))

	return (
		<>
			<h1>Dependent</h1>
		</>
	)
}
export default DependentQuery;