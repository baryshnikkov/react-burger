import { type FC, lazy } from 'react'

import { type IngredientDetailsProps } from './IngredientDetails'

export const IngredientDetailsAsync = lazy<FC<IngredientDetailsProps>>(
	async () => await import('./IngredientDetails'),
)
