import { Flex } from "@chakra-ui/react"

import CardForm from "@/components/CardForm/CardForm"
import SignUpForm from "@/components/SignUpForm/SignUpForm"
import { ROUTES } from "@/routes/routes"

export default function SignUpPage() {
	return (
		<Flex alignItems="center" justifyContent="center" paddingY="5" minH="100vh">
			<CardForm
				title="Sign Up"
				description="Fill in the form below to sign up"
				link={{
					name: "Sign In",
					to: ROUTES.SIGN_IN
				}}
			>
				<SignUpForm />
			</CardForm>
		</Flex>
	)
}
