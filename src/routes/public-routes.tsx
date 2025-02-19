import Cookie from "js-cookie"
import { Navigate } from "react-router"

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
	const isAuthenticated = Cookie.get("token")

	if (isAuthenticated) {
		return <Navigate to="/" />
	}

	return children
}

export default PublicRoute
