"use client";
import { LoginSchema } from "@/schemas/login.schema";
import authService from "@/services/auth.service";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default  function Login() {
	const router =  useRouter()
	const [redit, setRedit] = useState(false)
  const { register, handleSubmit } = useForm<LoginSchema>();

  const handleSignIn: SubmitHandler<LoginSchema> = async (data) => {
	try{
		const result = await authService(data);
		console.log(result.data.token);
		setRedit(true)
	} catch (err){
		console.error("credenciais invalidas")
	}
    
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#faf8ff]">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        action=""
        method="POST"
        className={`py-6 px-4 flex flex-col justify-center items-center
						gap-8 bg-white rounded-xl border-[#c3c6d6]`}
      >
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="user_name"
            className={`text-xs font-semibold uppercase tracking-wider
						text-[#424654]`}
          >
            Nome de Usuario
          </label>
          <input
            {...register("user_name")}
            type="text"
            name="user_name"
            id="username"
            placeholder="Josue"
            className={`w-full bg-[#f2f3fe] rounded-lg py-2 px-4
									text-sm focus:ring-3 focus:ring-primary
									transition-all placeholder:text-[#737785]/50
									`}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className={`text-xs font-semibold uppercase tracking-wider
						text-[#424654]`}
          >
            Palavra Passe
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className={`w-full bg-[#f2f3fe] rounded-lg py-2 px-4
									text-sm focus:ring-3 focus:ring-primary
									transition-all placeholder:text-[#737785]/50
									`}
          />
        </div>

    <button
      type="submit"
      onClick={redit ? () => router.push('/dashboard') : undefined}
      className={`w-full py-2 px-4 bg-primary text-white font-bold
                            rounded-lg shadow-lg shadow-primary/20 cursor-pointer
                            hover:bg-[#0056d2] transition-all flex items-center
                            justify-center gap-3 active:scale-[0.98]`}
    >
      <span>Iniciar Sessão</span>
    </button>
      </form>
    </div>
  );
}
