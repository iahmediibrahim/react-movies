import { Star } from '@mui/icons-material'
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { Container, Item } from './Common/grid'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({
	title,
	poster_path,
	vote_average,
	release_date,
	type,
}: any) => (
	<Card
		sx={{
			position: 'relative',
		}}
	>
		<CardActionArea>
			<CardMedia
				sx={{
					maxHeight: 300,
				}}
				component="img"
				image={API_IMG + poster_path}
				alt="green iguana"
			/>
			<CardContent
				sx={{
					display: type === 'upcoming' ? 'unset' : 'none',
					backgroundColor: 'rgba(0,0,0,0.5)',
					width: '100%',
					position: 'absolute',
					zIndex: 1,
					bottom: 0,
				}}
			>
				<Container justifyContent="space-between">
					<Item xs={12} sm={6} md={8} lg={8}>
						<Typography variant="subtitle1" color="white">
							{title}
						</Typography>
						<Typography variant="caption" color="grey.500">
							{release_date}
						</Typography>
					</Item>
					<Item
						xs={12}
						sm={6}
						md={4}
						lg={4}
						sx={{
							display: 'grid',
							placeContent: 'end',
							color: '#e8ae2f',
						}}
					>
						<Typography
							variant="caption"
							sx={{
								display: 'flex',
								alignItems: 'center',
								color: 'currentColor',
							}}
						>
							<Star
								sx={{
									width: 20,
									marginTop: '-3px',

									mr: 1,
								}}
							/>
							{vote_average}
						</Typography>
					</Item>
				</Container>
			</CardContent>
		</CardActionArea>
	</Card>
)

export default MovieCard
