import { forgotPasswordReducer } from './model/slice/forgotPasswordSlice'
import { type ForgotPasswordSchema } from './model/types/forgotPassword'
import { ForgotPasswordPageAsync as ForgotPasswordPage } from './ui/ForgotPasswordPage.async'

export { ForgotPasswordPage, forgotPasswordReducer }
export type { ForgotPasswordSchema }
