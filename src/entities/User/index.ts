import { getAccessToken } from "./model/selectors/getAccessToken";
import { getInited } from "./model/selectors/getInited";
import { getIsAuth } from "./model/selectors/getIsAuth";
import { updateAccessToken } from "./model/services/updateAccessToken";
import { userReducer, userActions } from "./model/slice/userSlice";
import { UserSchema } from "./model/types/userSchema";

export {
	userActions,
	userReducer,
	getIsAuth,
	getInited,
	updateAccessToken,
	getAccessToken,
};
export type { UserSchema };
