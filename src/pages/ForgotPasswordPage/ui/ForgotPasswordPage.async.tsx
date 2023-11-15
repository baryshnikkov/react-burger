import { lazy } from 'react'

export const ForgotPasswordPageAsync = lazy(
	async () => await import('./ForgotPasswordPage'),
)
