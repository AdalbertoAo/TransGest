import { AuthContext } from "@/components/context/AuthContext";
import { useContext } from "react";


export function  useAuth()
{
	return useContext(AuthContext)

}
