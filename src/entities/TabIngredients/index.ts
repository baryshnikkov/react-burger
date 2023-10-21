import { getCurrentTabIngredient } from "./model/selectors/getCurrentTabIngredient";
import { tabIngredientsReducer } from "./model/slice/tabIngredientsSlice";
import { TabIngredientsSchema } from "./model/types/tabIngredients";
import { TabIngredients } from "./ui/TabIngredients";

export { tabIngredientsReducer, getCurrentTabIngredient, TabIngredients };
export type { TabIngredientsSchema };
