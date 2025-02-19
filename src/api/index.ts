import axios from "axios"
import Cookie from "js-cookie"

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		accept: "application/json"
	}
})

api.interceptors.request.use(
	async function (config) {
		config.headers.Authorization = Cookie.get("token")

		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	response => response,

	function (error) {
		const { status } = error
		if (status === 401 || status === 403) {
			Cookie.remove("token")
		}
		return Promise.reject(error)
	}
)

export default api
