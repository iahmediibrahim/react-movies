import { searchMovies } from '@/Utils/Http'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useReducer } from 'react'
import { initialState, reducer } from './useQueryReducer'
const MOVIES_QUERY_KEY = 'movies'
export default function useSearchMovies() {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
	})
	const { search, page } = state

	const handleSearch = (value: string) => {
		dispatch({ type: 'PAGE', payload: 1 })
		dispatch({ type: 'SEARCH', payload: value })
	}

	const { data, error, isError, isLoading } = useQuery<any, AxiosError>(
		[MOVIES_QUERY_KEY + search, page, search],
		async () => {
			if (search === '' || search === undefined) return null
			return await searchMovies({ page, search })
		},
	)
	if (isError && error) {
		console.error(error)
	}

	return {
		isLoading,
		dispatch,
		page,
		search,
		data: data?.data?.results,
		total: data?.data?.results?.length,
		count: data?.data?.total_pages,
		handleSearch,
	}
}
