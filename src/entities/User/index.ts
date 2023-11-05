import { getInited } from "./model/selectors/getInited";
import { getIsAuth } from "./model/selectors/getIsAuth";
import { userReducer, userActions } from "./model/slice/userSlice";
import { UserSchema } from "./model/types/userSchema";

export { userActions, userReducer, getIsAuth, getInited };
export type { UserSchema };
