import "./index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

import App from "@/App.tsx"
import { Provider } from "@/components/ui/provider"
import SignInPage from "@/pages/SignInPage.tsx"
import SignUpPage from "@/pages/SignUpPage.tsx"
import PrivateRoute from "@/routes/private-route"
import { ROUTES } from "@/routes/routes.ts"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<App />
							</PrivateRoute>
						}
					/>

					<Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
					<Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	</StrictMode>
)
