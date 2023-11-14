import { useEffect, useState } from "react";
import { InputText } from "@/shared/ui/InputText";
import { InputMail } from "@/shared/ui/InputMail";
import { InputPassword } from "@/shared/ui/InputPassword";
import cls from "./ProfileForm.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
	getAccessToken,
	getIsLoadingUser,
	getProfileData,
	getUserMail,
	getUserName,
	setProfileData,
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
	const isLoading = useSelector(getIsLoadingUser);
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

	const onSave = () => {
		if (accessToken) {
			dispatch(
				setProfileData({
					accessToken,
					name: nameValue,
					email: emailValue,
					password: passwordValue,
				})
			).then((response: any) => {
				if (response.payload?.success) {
					setIsChangeValue(false);
				}
			});
		}
	};

	const onReject = () => {
		if (name && mail) {
			setNameValue(name);
			setEmailValue(mail);
		}
		setPasswordValue("");
		setIsChangeValue(false);
	};

	const onChangeMail = (value: string) => {
		setEmailValue(value);
		setIsChangeValue(true);
	};

	const onChangeName = (value: string) => {
		setNameValue(value);
		setIsChangeValue(true);
	};

	const onChangePassword = (value: string) => {
		setPasswordValue(value);
		setIsChangeValue(true);
	};

	return (
		<form className={cls.ProfileForm}>
			<InputText
				name="name"
				value={nameValue}
				onChange={onChangeName}
				placeholder="Имя"
				isEdit={true}
				isChangeValue={isChangeValue}
			/>
			<InputMail
				value={emailValue}
				onChange={onChangeMail}
				isEdit={true}
				isChangeValue={isChangeValue}
			/>
			<InputPassword
				value={passwordValue}
				onChange={onChangePassword}
				isEdit={true}
				isChangeValue={isChangeValue}
			/>

			{isChangeValue && (
				<div className={cls.buttons}>
					<Button
						htmlType="button"
						type="secondary"
						size="medium"
						onClick={onReject}
					>
						Отмена
					</Button>
					<Button
						htmlType="button"
						type="primary"
						size="medium"
						extraClass="ml-2"
						onClick={onSave}
					>
						{isLoading ? "Сохранение..." : "Сохранить"}
					</Button>
				</div>
			)}
		</form>
	);
};
