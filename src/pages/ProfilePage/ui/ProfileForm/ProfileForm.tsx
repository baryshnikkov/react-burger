import { useEffect, useState } from "react";
import { InputText } from "@/shared/ui/InputText";
import { InputMail } from "@/shared/ui/InputMail";
import { InputPassword } from "@/shared/ui/InputPassword";
import cls from "./ProfileForm.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
	getAccessToken,
	getProfileData,
	getUserMail,
	getUserName,
} from "@/entities/User";
import { useSelector } from "react-redux";

export const ProfileForm = () => {
	const [nameValue, setNameValue] = useState<string>("");
	const [emailValue, setEmailValue] = useState<string>("");
	const [passwordValue, setPasswordValue] = useState<string>("");
	const [isChangeValue, setIsChangeValue] = useState(false);
	const accessToken = useSelector(getAccessToken);
	const name = useSelector(getUserName);
	const mail = useSelector(getUserMail);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (accessToken && !name && !mail) {
			dispatch(getProfileData({ accessToken }));
		}
	}, [accessToken, name, mail]);

	useEffect(() => {
		if (name) {
			setNameValue(name);
		}
	}, [name]);

	useEffect(() => {
		if (mail) {
			setEmailValue(mail);
		}
	}, [name]);

	return (
		<form className={cls.ProfileForm}>
			<InputText
				name="name"
				value={nameValue}
				onChange={setNameValue}
				placeholder="Имя"
				isEdit={true}
			/>
			<InputMail
				value={emailValue}
				onChange={setEmailValue}
				isEdit={true}
			/>
			<InputPassword
				value={passwordValue}
				onChange={setPasswordValue}
				isEdit={true}
			/>

			{isChangeValue && (
				<div className={cls.buttons}>
					<Button
						htmlType="button"
						type="secondary"
						size="medium"
						onClick={() => console.log("reject")}
					>
						Отмена
					</Button>
					<Button
						htmlType="button"
						type="primary"
						size="medium"
						extraClass="ml-2"
						onClick={() => console.log("save")}
					>
						Сохранить
					</Button>
				</div>
			)}
		</form>
	);
};
