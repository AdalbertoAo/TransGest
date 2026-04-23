"use client"
import { LoginSchema } from "@/schemas/login.schema"
import authService from "@/services/auth.service"
import { useState } from "react"



export default function Page() {

	const [user_name, setUserName]  = useState(' ')
	const [password, setPassword]  = useState(" ")

	function handleSaveUser(){
		const data:LoginSchema = {
			user_name,
			password
		}

		const result = authService(data)
		console.log(result)
	}

  return (
	<div className="w-full h-screen flex justify-center items-center bg-[#faf8ff]">
		<form	onSubmit={handleSaveUser} 
			action=""
			method="post"
			className={`py-6 px-4 flex flex-col justify-center items-center
						gap-8 bg-white rounded-xl border-[#c3c6d6]`}>
			
			<div className="flex flex-col space-y-2">
				<label	htmlFor="user_name"
						className={`text-xs font-semibold uppercase tracking-wider
						text-[#424654]`}>
							Nome de Usuario
				</label>
				<input	type="text" 
						name="user_name"
						id="username"
						placeholder="Josue"
						className={`w-full bg-[#f2f3fe] rounded-lg py-2 px-4
									text-sm focus:ring-3 focus:ring-primary
									transition-all placeholder:text-[#737785]/50
									`}
						onChange={(e)=> setUserName(e.target.value)}
						/>
			</div>
			
			<div className="flex flex-col space-y-2">
				<label	htmlFor="password"
						className={`text-xs font-semibold uppercase tracking-wider
						text-[#424654]`}>
							Palavra Passe
				</label>
				<input	type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className={`w-full bg-[#f2f3fe] rounded-lg py-2 px-4
									text-sm focus:ring-3 focus:ring-primary
									transition-all placeholder:text-[#737785]/50
									`}
						onChange={(e)=> setPassword(e.target.value)}
						/>
			</div>
			
			<button	type="submit"
					className={`w-full py-2 px-4 bg-primary text-white font-bold
								rounded-lg shadow-lg shadow-primary/20 cursor-pointer
								hover:bg-[#0056d2] transition-all flex items-center
								justify-center gap-3 active:scale-[0.98]`}
			>
				<span>Iniciar Sessão</span>
			</button>
		</form>
	</div>
  )
}
