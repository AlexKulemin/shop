import api from "@/api"

const getProducts = async (page: number = 1) => {
	try {
		const resp = await api("/api/get_products", {
			params: {
				page
			}
		})
		return resp.data
	} catch (error) {
		return error
	}
}

export default getProducts
