export interface StateSchema {}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
