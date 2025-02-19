import { AxiosError } from "axios"

import api from "@/api"

const signUp = async (data: signUpOptions) => {
	const { name, secondName, password, username } = data

	const full_name = `${name ?? ""} ${secondName ?? ""}`.trim()

	try {
		api.post("/api/sign_up", { password, username, full_name })
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data.message)
		}
	}
}
export default signUp

interface signUpOptions {
	username: string
	password: string
	name?: string
	secondName?: string
}
