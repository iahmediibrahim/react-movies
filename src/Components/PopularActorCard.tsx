import { Avatar, Box, Typography } from '@mui/material'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const PopularActorCard = ({ name, popularity, profile_path }: any) => (
	<Box
		sx={{
			display: 'flex',
			alignItems: 'center',
			mt: 10,
		}}
	>
		<Avatar
			alt="Remy Sharp"
			src={API_IMG + profile_path}
			sx={{ width: 56, height: 56 }}
		/>
		<Typography
			variant="subtitle1"
			sx={{
				ml: 6,
			}}
			color="white"
		>
			{name}
			<Typography variant="subtitle2" color="grey.500">
				Popularity: {popularity}
			</Typography>
		</Typography>
	</Box>
)

export default PopularActorCard
