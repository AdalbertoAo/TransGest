import z from "zod"

const loginSchema = z.object({
	user_name: z.string(),
	password: z.string().min(6, "Password tem menos de 6 caracteres")
})

export type LoginSchema = z.infer<typeof loginSchema>

export {loginSchema};
