import { Pagination } from '@mui/material'
import { Container } from './grid'
const PaginationWrapper = ({
	page,
	count,
	handler,
}: {
	page: number
	count: number | undefined
	handler: (value: number) => void
}) => {
	return (
		<Container justifyContent="flex-end">
			<Pagination
				page={page}
				count={count}
				onChange={(e: React.ChangeEvent<unknown>, value: number) => {
					handler(value)
				}}
				color="primary"
			/>
		</Container>
	)
}
export default PaginationWrapper
