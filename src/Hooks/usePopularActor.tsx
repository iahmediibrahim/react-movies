import { getPopularActor } from '@/Utils/Http'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
const POPULAR_QUERY_KEY = 'POPULAR_ACTOR'
export default function usePopularActor() {
	const { data, error, isError } = useQuery<any, AxiosError>(
		[POPULAR_QUERY_KEY],
		async () => {
			return await getPopularActor()
		},
	)
	if (isError && error) {
		console.error(error)
	}

	return {
		data: data?.data?.results,
	}
}
