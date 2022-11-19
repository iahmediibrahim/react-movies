import { Box } from '@mui/material'
import Movies from './Movies'

const MiddleSection = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				backgroundColor: 'primary.dark',
				minHeight: '100%',
				px: 8,
			}}
		>
			<Movies type={'upcoming'} width={400} title={'Discovers'} />
			<Movies type={'popular'} width={150} title={'Popullar Film'} />
			<Movies type={'top_rated'} width={150} title={'Top Rated'} />
		</Box>
	)
}
export default MiddleSection
