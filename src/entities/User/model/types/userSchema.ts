export interface User {
	name?: string;
	mail?: string;
	accessToken?: string;
}

export interface UserSchema extends User {
	isAuth: boolean;
	inited: boolean;
}
