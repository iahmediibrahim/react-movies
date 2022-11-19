import { getMovies } from '@/Utils/Http'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useReducer } from 'react'
import { initialState, reducer } from './useQueryReducer'
const MOVIES_QUERY_KEY = 'movies'
export default function useMovies(filter: string) {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
	})

	const { page } = state

	const { data, error, isError, isLoading } = useQuery<any, AxiosError>(
		[MOVIES_QUERY_KEY + filter, page, filter],
		async () => {
			return await getMovies({ page, filter })
		},
	)
	if (isError && error) {
		console.error(error)
	}

	return {
		isLoading,
		dispatch,
		page,
		data: data?.data?.results,
		total: data?.data?.results?.length,
		count: data?.data?.total_pages,
	}
}
