import { Alert, Button, Input, Stack } from "@chakra-ui/react"
import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toFormikValidationSchema } from "zod-formik-adapter"

import signIn from "@/api/actions/signIn"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { SignInFormSchema } from "@/utils/form-schema"

export default function SignInForm() {
	const navigate = useNavigate()
	const [errorForm, setErrorForm] = useState<string | null>(null)
	const { handleSubmit, handleChange, values, errors, touched } = useFormik({
		initialValues: {
			username: "",
			password: ""
		},
		validationSchema: () => toFormikValidationSchema(SignInFormSchema),
		onSubmit: async values => {
			try {
				await signIn(values)
				navigate("/")
			} catch (error: unknown) {
				if (error instanceof Error) {
					setErrorForm(error.message)
				}
			}
		}
	})

	return (
		<form onSubmit={handleSubmit}>
			<Stack gap="4" w="full">
				<Field
					label="Name"
					errorText={errors.username}
					invalid={!!errors.username && !!touched.username}
				>
					<Input
						name="username"
						onChange={handleChange}
						value={values.username}
					/>
				</Field>
				<Field
					label="Password"
					invalid={!!errors.password && !!touched.password}
					errorText={errors.password}
				>
					<PasswordInput
						name="password"
						onChange={handleChange}
						value={values.password}
					/>
				</Field>
				{!!errorForm && (
					<Alert.Root status="error">
						<Alert.Indicator />
						<Alert.Content>
							<Alert.Title>{errorForm}</Alert.Title>
						</Alert.Content>
					</Alert.Root>
				)}
				<Button
					colorPalette="teal"
					variant="solid"
					w="full"
					mt="2"
					type="submit"
				>
					Sign In
				</Button>
			</Stack>
		</form>
	)
}
