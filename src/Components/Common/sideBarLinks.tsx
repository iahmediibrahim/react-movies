import {
	BookmarkBorderRounded,
	CreditScoreRounded,
	FolderSpecialRounded,
	HomeRounded,
	LiveTvRounded,
	QueryBuilderRounded,
	SettingsRounded,
	SubscriptionsRounded,
	SvgIconComponent,
} from '@mui/icons-material'
type NavLink = { to: string; text: string; icon: SvgIconComponent }

export const menu: NavLink[] = [
	{
		to: '/',
		text: `Home`,
		icon: HomeRounded,
	},
	{
		to: '/',
		text: `Favourite`,
		icon: BookmarkBorderRounded,
	},
	{
		to: '/',
		text: `Purchase`,
		icon: CreditScoreRounded,
	},
	{
		to: '/',
		text: `Reminder`,
		icon: QueryBuilderRounded,
	},
]
export const other: NavLink[] = [
	{
		to: '/',
		text: `Playlist`,
		icon: SubscriptionsRounded,
	},
	{
		to: '/',
		text: `Live`,
		icon: LiveTvRounded,
	},
	{
		to: '/',
		text: `Bookmarks`,
		icon: FolderSpecialRounded,
	},
	{
		to: '/',
		text: `Settings`,
		icon: SettingsRounded,
	},
]
