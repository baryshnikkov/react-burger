import { lazy } from 'react'

export const IngredientsPageAsync = lazy(async () => await import('./IngredientsPage'))
