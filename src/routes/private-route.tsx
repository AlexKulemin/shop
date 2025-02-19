import Cookie from "js-cookie"
import { Navigate } from "react-router"

import { ROUTES } from "@/routes/routes.ts"

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
	const isAuthenticated = Cookie.get("token")

	if (isAuthenticated) {
		return children
	}

	return <Navigate to={ROUTES.SIGN_IN} />
}

export default PrivateRoute
