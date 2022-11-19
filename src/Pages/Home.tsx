import useSearchMovies from '@/Hooks/useSearchMovies'
import { Container, Item } from '@Components/Common/grid'
import LeftSideBar from '@Components/LeftSideBar'
import MiddleSection from '@Components/MiddleSection'
import RightSideBar from '@Components/RightSideBar'
import VerticalMoviesList from '@Components/VerticalMoviesList'

const Home = () => {
	const {
		isLoading,
		dispatch,
		page,
		search,
		data,

		handleSearch,
	} = useSearchMovies()
	return (
		<Container
			sx={{
				minHeight: '100vh',
				backgroundColor: 'primary.dark',
			}}
		>
			<Item
				xs={0}
				sm={0}
				md={0}
				lg={2}
				sx={{
					backgroundColor: 'primary.light',
				}}
			>
				<LeftSideBar />
			</Item>
			<Item xs={12} sm={12} md={12} lg={7}>
				{data === undefined && isLoading === false ? (
					<MiddleSection />
				) : (
					<VerticalMoviesList
						data={data}
						isLoading={isLoading}
						page={page}
						search={search}
						dispatch={dispatch}
					/>
				)}
			</Item>
			<Item xs={0} sm={0} md={0} lg={3}>
				<RightSideBar search={search} handleSearch={handleSearch} />
			</Item>
		</Container>
	)
}
export default Home
