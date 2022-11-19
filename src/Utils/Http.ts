import axios from 'axios'
let baseUrl = import.meta.env.VITE_BASE_URL

const GETJSON = async (uri: string, params?: any) => {
	const result = await axios.get(baseUrl + uri, {
		params,
		headers: {
			'Content-Type': 'application/json',
		},
	})
	if (result.status === 200) return result
}

const POSTJSON = async (uri: string, body?: any) => {
	const result = await axios.post(baseUrl + uri, JSON.stringify(body), {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	if (result.status === 200 || result.status === 201) return result
}

const PUTJSON = async (uri: string, body?: any) => {
	const result = await axios.put(baseUrl + uri, JSON.stringify(body), {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	if (result.status === 200) return result
}

const DELETEJSON = async (uri: string) => {
	const result = await axios.delete(baseUrl + uri, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	if (result.status !== 200) {
		const err = await result.data
		if (err.startsWith('{') && err.endsWith('}')) {
			const errAsJson = JSON.parse(err)
			throw Error(errAsJson.message)
		} else {
			throw Error(err)
		}
	}
}
//  ============================ MOVIES  ==================================  //

export const getMovies: ({
	page,
	filter,
}: {
	page: number
	filter: string
}) => Promise<any | undefined> = async ({ page, filter }) => {
	const resp = await GETJSON(
		`movie/${filter}?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US&page=${page}`,
	)
	return resp
}
export const searchMovies: ({
	page,
	search,
}: {
	page: number
	search: string
}) => Promise<any | undefined> = async ({ page, search }) => {
	const resp = await GETJSON(
		`/search/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US&page=${page}&query=${search}`,
	)
	return resp
}

export const getPopularActor: () => Promise<any | undefined> = async () => {
	const resp = await GETJSON(
		`person/popular?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US&page=1`,
	)
	return resp
}
