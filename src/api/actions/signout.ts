import api from "@/api"

const signOut = async () => {
	api.post("/api/logout")
}

export default signOut
