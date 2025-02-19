import { AxiosError } from "axios"

import api from "@/api"

const signIn = async (data: signInOptions) => {
	try {
		await api.post("/api/sign_in", data)
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data.message)
		}
	}
}

interface signInOptions {
	username: string
	password: string
}

export default signIn
