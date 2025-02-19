import { Flex } from "@chakra-ui/react"

import CardForm from "@/components/CardForm/CardForm"
import SignInForm from "@/components/SignInForm/SignInForm"
import { ROUTES } from "@/routes/routes"

export default function SignInPage() {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			h="full"
			paddingY="5"
			minH="100vh"
		>
			<CardForm
				title="Sign In"
				description="Fill in the form below to sign in"
				link={{
					name: "Sign Up",
					to: ROUTES.SIGN_UP
				}}
			>
				<SignInForm />
			</CardForm>
		</Flex>
	)
}
