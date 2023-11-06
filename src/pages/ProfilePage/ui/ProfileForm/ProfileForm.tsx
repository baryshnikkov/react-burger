import { useState } from "react";
import { InputText } from "@/shared/ui/InputText";
import { InputMail } from "@/shared/ui/InputMail";
import { InputPassword } from "@/shared/ui/InputPassword";
import cls from "./ProfileForm.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const ProfileForm = () => {
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [isChangeValue, setIsChangeValue] = useState(false);

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
