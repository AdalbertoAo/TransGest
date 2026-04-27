import type { LoginSchema } from "@/schemas/login.schema";
import authService from "@/services/auth.service";
import { createContext, ReactNode } from "react";
import {setCookie} from "nookies"
import { redirect } from "next/navigation";

interface AuthContextType {
    isAuthenticated: boolean
    signIn: (data: LoginSchema) => Promise<void>
}
interface AuthProviderProps {
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthProviderProps){
   const isAuthenticated = false

   async function signIn({user_name, password}:LoginSchema){
    const result = await authService({user_name, password})
    const token = result.token

    setCookie(undefined, "transgest.token", token, {
        maxAge: 60 * 60 / 1 // 1 hora ate o cookie expirar 
    })
    redirect("/dashboard")
   }
    return (
        <AuthContext.Provider value={{isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}