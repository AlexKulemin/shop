import { z } from "zod"

export const SignInFormSchema = z.object({
	username: z.string({ message: "Please enter a valid username." }).min(4),
	password: z
		.string({ message: "Please enter a valid password." })
		.min(8, { message: "Be at least 8 characters long" })
		.regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
		.regex(/[0-9]/, { message: "Contain at least one number." })
		.regex(/[^a-zA-Z0-9]/, {
			message: "Contain at least one special character."
		})
		.trim()
})

export const SignUpFormSchema = z
	.object({
		username: z
			.string({ message: "Please enter a valid username." })
			.min(4, { message: "Name must be at least 2 characters long." })
			.trim(),
		name: z.optional(z.string().trim()),
		secondName: z.optional(z.string().trim()),
		password: z
			.string({ message: "Please enter a valid password." })
			.min(8, { message: "Be at least 4 characters long" })
			.regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
			.regex(/[0-9]/, { message: "Contain at least one number." })
			.regex(/[^a-zA-Z0-9]/, {
				message: "Contain at least one special character."
			})
			.trim(),
		confirmPassword: z
			.string({ message: "Please enter a valid password." })
			.trim()
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: "custom",
				message: "Passwords do not match.",
				path: ["confirmPassword"]
			})
		}
	})
