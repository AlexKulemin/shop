import { Alert, Button, Input, Stack } from "@chakra-ui/react"
import { useFormik } from "formik"
import { useState } from "react"
import { toFormikValidationSchema } from "zod-formik-adapter"

import signUp from "@/api/actions/signup"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { SignUpFormSchema } from "@/utils/form-schema"

export default function SignUpForm() {
	const [errorForm, setErrorForm] = useState<string | null>(null)

	const { handleSubmit, handleChange, values, errors, touched } = useFormik({
		initialValues: {
			username: "",
			name: "",
			secondName: "",
			password: "",
			confirmPassword: ""
		},
		validationSchema: () => toFormikValidationSchema(SignUpFormSchema),
		onSubmit: async values => {
			try {
				await signUp(values)
			} catch (error) {
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
					label="Username"
					invalid={!!errors.username && !!touched.username}
					errorText={errors.username}
				>
					<Input
						name="username"
						onChange={handleChange}
						value={values.username}
					/>
				</Field>
				<Field
					label="First name"
					invalid={!!errors.name && !!touched.name}
					errorText={errors.name}
				>
					<Input name="name" onChange={handleChange} value={values.name} />
				</Field>
				<Field
					label="Second name"
					invalid={!!errors.secondName && !!touched.secondName}
					errorText={errors.secondName}
				>
					<Input
						name="secondName"
						onChange={handleChange}
						value={values.secondName}
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
				<Field
					label="Confirm password"
					invalid={!!errors.confirmPassword && !!touched.confirmPassword}
					errorText={errors.confirmPassword}
				>
					<PasswordInput
						name="confirmPassword"
						onChange={handleChange}
						value={values.confirmPassword}
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
					Sign Up
				</Button>
			</Stack>
		</form>
	)
}
