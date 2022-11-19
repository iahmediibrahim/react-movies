import useMovies from '@/Hooks/useMovies'
import { Box, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import Loading from './Common/Loading'
import LeftAndRightButtons from './LeftAndRightButtons'
import MovieCard from './MovieCard'

const Movies = ({
	type,
	width,
	title,
}: {
	type: string
	width: number
	title: string
}) => {
	const { data, page, dispatch, isLoading } = useMovies(type)
	const boxRef = useRef(null)
	const [results, setResults] = useState([])

	const onScroll = () => {
		if (boxRef.current.scrollLeft >= (width - 80) * page * data?.length - 2) {
			dispatch({ type: 'PAGE', payload: page + 1 })
		}
	}
	const scroll = (scrollOffset: any) => {
		boxRef.current.scrollLeft += scrollOffset
	}
	useEffect(() => {
		if (data) {
			setResults((prev: any[]): any => [...prev, ...data])
		}
	}, [data, page])

	if (isLoading && results.length === 0) return <Loading />
	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<Typography
				variant={type === 'upcoming' ? 'h4' : 'h6'}
				color="grey.500"
				sx={{
					pt: 20,
					pb: 6,
				}}
			>
				{title}
			</Typography>
			<LeftAndRightButtons
				scrollLeft={() => scroll(-400)}
				scrollRight={() => scroll(400)}
			/>
			<Box
				ref={boxRef}
				onScroll={onScroll}
				sx={{
					overflow: 'hidden',
					scrollbarWidth: 'none',
					scrollBehavior: 'smooth',

					display: 'flex',
					width: 'auto',
					position: 'relative',
				}}
			>
				{results?.length >= 0 &&
					results?.map((movie: any) => (
						<Box
							key={movie.id}
							sx={{
								minWidth: `${width}px`,
								p: 4,
							}}
						>
							<MovieCard {...movie} type={type} />
						</Box>
					))}
			</Box>
		</Box>
	)
}
export default Movies
