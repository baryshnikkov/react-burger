import { lazy } from 'react'

export const ProfileOrdersDetailsPageAsync = lazy(
	async () => await import('./ProfileOrdersDetailsPage'),
)
