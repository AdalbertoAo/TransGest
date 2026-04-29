import { LoginSchema } from "@/schemas/login.schema";
import { ReactNode } from "react";

export interface AuthContextType {
    isAuthenticated: boolean
    signIn: (data: LoginSchema) => Promise<void>
}
export interface AuthProviderProps {
    children: ReactNode;
}