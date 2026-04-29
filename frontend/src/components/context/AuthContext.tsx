"use client"

import type { LoginSchema } from "@/schemas/login.schema";
import authService from "@/services/auth.service";
import { createContext, useEffect, useState } from "react";
import {setCookie} from "nookies"
import { useRouter } from "next/navigation";
import { AuthContextType, AuthProviderProps } from "@/lib/types";


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<LoginSchema | null>(null)
   const isAuthenticated = !!user
   const router =  useRouter()


   async function signIn({user_name, password}:LoginSchema){

    const result = await authService({user_name, password})
    const token = result?.data.token
   
    setCookie(undefined, "transgest.token", token, {
        maxAge: 60 * 60 / 1 // 1 hora ate o cookie expirar 
    })
    setUser({user_name, password})
     console.log(token)
     router.push("/dashboard")
    // redirect()
   }
    return (
        <AuthContext.Provider value={{isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}