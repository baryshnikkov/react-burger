import { StateSchema } from "@/app/providers/StoreProvider";

export const getUserMail = (state: StateSchema) => state.user.mail;
