import {
	Box,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/styles'
import { menu, other } from './Common/sideBarLinks'

const ListItemWithStyles = styled(ListItem)(({ theme }) => ({
	'&& .MuiListItemButton-root': {
		borderLeft: `4px solid transparent`,
		paddingLeft: '3rem',
		margin: '0.5rem 0',
		color: grey[500],
		'&, & .MuiListItemIcon-root': {
			color: grey[500],
		},
		'&.Mui-selected': {
			borderLeft: `4px solid ${theme.palette.primary.main}`,
			color: theme.palette.primary.main,
			'&, & .MuiListItemIcon-root': {
				color: theme.palette.primary.main,
			},
		},
		'&:hover': {
			borderLeft: `4px solid ${theme.palette.primary.main}`,
			transition: 'border 0.2s ease-in',
			'&, & .MuiListItemIcon-root': {
				color: theme.palette.primary.main,
				transition: 'color 0.2s ease-in',
			},
		},
	},
}))

const LeftSideBar = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				height: '100%',
				width: '100%',
			}}
		>
			<Typography
				variant="h4"
				color="grey.500"
				sx={{
					width: '100%',
					pl: 20,
					px: 20,
					py: 20,
				}}
			>
				<Box component={'span'} sx={{ color: 'primary.main' }}>
					Mov
				</Box>
				.time
			</Typography>
			<Typography
				variant="subtitle2"
				color="grey.500"
				sx={{
					pl: 20,
					mb: 4,
					textTransform: 'uppercase',
				}}
			>
				menu
			</Typography>
			{menu.map(({ text, to, icon: Icon }, index) => (
				<ListItemWithStyles disablePadding key={text}>
					<ListItemButton
						onClick={() => {
							console.log('clicked')
						}}
						selected={text === 'Home' ? true : false}
						sx={{
							minHeight: 48,
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								justifyContent: 'center',
							}}
						>
							<Icon />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItemWithStyles>
			))}
			<Typography
				variant="subtitle2"
				color="grey.500"
				sx={{
					pl: 20,
					my: 4,

					textTransform: 'uppercase',
				}}
			>
				other
			</Typography>
			{other.map(({ text, to, icon: Icon }, index) => (
				<ListItemWithStyles disablePadding key={text}>
					<ListItemButton
						onClick={() => {
							console.log('clicked')
						}}
						selected={false}
						sx={{
							minHeight: 48,
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								justifyContent: 'center',
							}}
						>
							<Icon />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItemWithStyles>
			))}
		</Box>
	)
}
export default LeftSideBar
