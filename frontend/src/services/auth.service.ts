import axiosClient from "@/lib/axios";
import { LoginSchema } from "@/schemas/login.schema";

export default async function authService({user_name, password}: LoginSchema){
	try {
		const result = await axiosClient.post("/login", {
			user_name,
			password
		})
		return result
	} catch (error) {
		console.error("falha ao fazer a requisicao post: ", error)
	}
	
} 

