// const forgotPasswordFormSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(1),
// })

import { FormForgotPassword } from '../components/ui'

function handleSubmit() {
  console.log('Teste')
}

// type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>

export function ForgotPasswordSendEmail() {
  return (
    <FormForgotPassword
      formDescription='Informe o email para recuperar sua senha.'
      submitButtonTitle='Enviar código'
      submitFunction={handleSubmit}
    />
  )
}
