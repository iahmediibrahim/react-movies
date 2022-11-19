import usePopularActor from '@/Hooks/usePopularActor'
import {
	ExpandMore,
	LocationOnTwoTone,
	NotificationsNoneOutlined,
} from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import { Container, Item } from './Common/grid'
import Search from './Common/Search'
import PopularActorCard from './PopularActorCard'
const RightSideBar = ({
	search,
	handleSearch,
}: {
	search: string
	handleSearch: (value: string) => void
}) => {
	const { data } = usePopularActor()
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				backgroundColor: 'primary.light',
				minHeight: '100%',
				px: 10,
				py: 20,
			}}
		>
			<Container alignItems="center" justifyContent="space-between">
				<Item
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Avatar
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/1.jpg"
						sx={{ width: 56, height: 56 }}
					/>
					<Typography
						variant="subtitle1"
						sx={{
							ml: 6,
						}}
						color="white"
					>
						Wade Warren
					</Typography>
					<ExpandMore
						sx={{
							ml: 2,
							color: '#fff',
						}}
					/>
				</Item>
				<Item>
					<LocationOnTwoTone
						sx={{
							ml: 2,
							color: '#fff',
						}}
					/>
					<NotificationsNoneOutlined
						sx={{
							ml: 2,
							color: '#fff',
						}}
					/>
				</Item>
			</Container>
			<Search search={search} handleSearch={handleSearch} />
			<Typography
				variant={'h6'}
				color="grey.500"
				sx={{
					pt: 20,
					pb: 6,
				}}
			>
				Popullar Actor
			</Typography>
			{data?.slice(0, 5).map((actor: any) => (
				<PopularActorCard {...actor} />
			))}
		</Box>
	)
}
export default RightSideBar
