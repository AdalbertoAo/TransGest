import axiosClient from "@/lib/axios";
import { LoginSchema } from "@/schemas/login.schema";

export default async function authService(login: LoginSchema){
    const result = await axiosClient.post("/login", {
        user_name: login.user_name,
        password: login.password
    })
    return result.data
} 

