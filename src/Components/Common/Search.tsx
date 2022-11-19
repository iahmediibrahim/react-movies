import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { Button, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { debounce } from 'lodash'
import { useMemo, useState } from 'react'
const Search = ({
	search,
	handleSearch,
}: {
	search: string
	handleSearch: (value: string) => void
}) => {
	const [value, setValue] = useState('')

	const debouncedSearchHandler = useMemo(
		() => debounce((nextValue: string) => handleSearch(nextValue), 1000),
		[],
	)
	const handleChange = (event: any) => {
		setValue(event.target.value)
		debouncedSearchHandler(event.target.value)
	}
	const filterList = [
		'Hollywood',
		'Bollywood',
		'Disney',
		'Marvel',
		'DC',
		'Pixar',
		'Warner',
		'Sony',
		'Universal',
	]

	return (
		<>
			<TextField
				sx={{
					mt: 18,
					mb: 8,
					mr: 4,
					width: '100%',
				}}
				variant="outlined"
				placeholder={'Search'}
				value={value}
				onChange={handleChange}
				InputProps={{
					endAdornment: value ? (
						<InputAdornment position="end">
							<CloseIcon
								sx={{ color: 'grey.500', cursor: 'pointer' }}
								onClick={() => {
									setValue('')
									handleSearch('')
								}}
							/>
						</InputAdornment>
					) : (
						<InputAdornment position="end">
							<SearchIcon
								sx={{
									color: 'grey.500',
									cursor: 'pointer',
								}}
							/>
						</InputAdornment>
					),
				}}
			/>
			{filterList.map((item) => (
				<Button
					key={item}
					variant="contained"
					color={search === item ? 'secondary' : 'info'}
					sx={{
						backgroundColor:
							search === item ? 'secondary' : 'rgba(255,255,255,0.1)',
						mr: 4,
						mt: 4,
					}}
					onClick={() => {
						setValue(item)
						handleSearch(item)
					}}
				>
					{item}
				</Button>
			))}
		</>
	)
}
export default Search
