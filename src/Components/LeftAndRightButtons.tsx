import { ChevronLeft, ChevronRight } from '@mui/icons-material/'
import { Box } from '@mui/material'
const LeftAndRightButtons = ({
	scrollLeft,
	scrollRight,
}: {
	scrollLeft: () => void
	scrollRight: () => void
}) => {
	return (
		<>
			<Box
				bgcolor="primary.main"
				sx={{
					position: 'absolute',
					borderRadius: '50%',
					left: '-20px',
					top: '50%',
					margin: 2,
					zIndex: 2,
					'&:hover': {
						backgroundColor: 'rgba(0,0,0,0.5)',
					},
				}}
				onClick={scrollLeft}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '40px',
						height: '40px',
						cursor: 'pointer',
						color: '#fff',
					}}
				>
					<ChevronLeft />
				</Box>
			</Box>
			<Box
				bgcolor="primary.main"
				sx={{
					position: 'absolute',
					borderRadius: '50%',
					right: '-20px',
					top: '50%',
					margin: 2,
					zIndex: 2,
					'&:hover': {
						backgroundColor: 'rgba(0,0,0,0.5)',
					},
				}}
				onClick={scrollRight}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '40px',
						height: '40px',
						cursor: 'pointer',
						color: '#fff',
					}}
				>
					<ChevronRight />
				</Box>
			</Box>
		</>
	)
}

export default LeftAndRightButtons
