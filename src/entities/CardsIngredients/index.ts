import {
	amountIngredientsActions,
	amountIngredientsReducer,
} from './model/slice/amountIngredientsSlice'
import { type AmountIngredientsSchema } from './model/types/types'
import { CardsIngredients } from './ui/CardsIngredients/CardsIngredients'
import { IngredientDetailsAsync as IngredientDetails } from './ui/ModalContainer/IngredientDetails.async'

export {
	CardsIngredients,
	IngredientDetails,
	amountIngredientsReducer,
	amountIngredientsActions,
}
export type { AmountIngredientsSchema }
