import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Container, Item } from './Common/grid'
import MovieCard from './MovieCard'

const VerticalMoviesList = ({
	isLoading,
	data,
	page,
	search,
	dispatch,
}: {
	isLoading: boolean
	data: any
	page: number
	search: string
	dispatch: any
}) => {
	const [results, setResults] = useState([])

	const onScroll = () => {
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

		if (scrollTop + clientHeight >= scrollHeight) {
			dispatch({ type: 'PAGE', payload: page + 1 })
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [results])

	useEffect(() => {
		if (data) {
			if (page === 1) {
				setResults(data)
			} else {
				setResults((prev: any[]): any => [...new Set([...prev, ...data])])
			}
		}
	}, [data, page])
	console.log(results)
	return (
		<Box
			sx={{
				px: 8,
				backgroundColor: 'primary.dark',
				width: '100%',
				position: 'relative',
			}}
		>
			<Typography
				variant={'h4'}
				color="grey.500"
				sx={{
					pt: 20,
					pb: 6,
				}}
			>
				{search}
			</Typography>

			<Container spacing={8}>
				{results?.map((movie: any) => (
					<Item key={movie.id} xs={12} sm={6} md={4} lg={3}>
						<MovieCard {...movie} type={'upcoming'} />
					</Item>
				))}
			</Container>
		</Box>
	)
}
export default VerticalMoviesList
