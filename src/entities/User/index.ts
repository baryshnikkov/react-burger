import { getAccessToken } from './model/selectors/getAccessToken'
import { getInited } from './model/selectors/getInited'
import { getIsAuth } from './model/selectors/getIsAuth'
import { getIsLoadingUser } from './model/selectors/getIsLoadingUser'
import { getUserMail } from './model/selectors/getUserMail'
import { getUserName } from './model/selectors/getUserName'
import { getProfileData } from './model/services/getProfileData'
import { logoutUser } from './model/services/logoutUser'
import { setProfileData } from './model/services/setProfileData'
import { updateAccessToken } from './model/services/updateAccessToken'
import { userReducer, userActions } from './model/slice/userSlice'
import { type UserSchema } from './model/types/userSchema'

export {
	userActions,
	userReducer,
	getIsAuth,
	getInited,
	updateAccessToken,
	getAccessToken,
	logoutUser,
	getProfileData,
	getUserName,
	getUserMail,
	setProfileData,
	getIsLoadingUser,
}
export type { UserSchema }
