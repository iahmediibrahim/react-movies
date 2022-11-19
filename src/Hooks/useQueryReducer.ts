export const initialState: {
	sort: number
	search: string
	page: number
	filter: string
} = {
	sort: 0,
	search: '',
	page: 1,
	filter: '',
}
export const reducer = (
	state = initialState,
	action: {
		type: string
		payload: any
	},
) => {
	switch (action.type) {
		case 'SORT':
			return { ...state, sort: action.payload }
		case 'SEARCH':
			return { ...state, search: action.payload }
		case 'PAGE':
			return { ...state, page: action.payload }
		case 'FILTER':
			return { ...state, filter: action.payload }

		default:
			return state
	}
}
