import { Input } from "postcss"

export function Login() {
  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <h1 className="text-xl font-semibold">Login</h1>
        <form action="" className="flex flex-col gap-8 flex-1">
          <div className="flex gap-3 flex-col">
            <span className="text-xs font-semibold text-zinc-600">
              Login, senha e nome necessários para a autenticação
            </span>

            {/* <Input
              type="email"
              placeholder="Informe seu email"
              variant="minimalist"
            />
            <Input
              type="password"
              placeholder="Crie uma senha"
              variant="minimalist"
            /> */}
            <input type="text" />
          </div>
          <a
            href="/auth/forgot-password"
            className="text-center text-balance underline"
          >
            Esqueci a senha
          </a>
          <button>Confirmar</button>
        </form>
        <span className="text-center">
          Ainda não tenho uma conta -{" "}
          <a href="/auth/register" className="text-balance underline">
            Cadrastar
          </a>
        </span>
      </div>
    </div>
  )
}
