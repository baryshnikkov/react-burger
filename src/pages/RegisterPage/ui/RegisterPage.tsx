import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getRouteLogin } from "@/shared/const/router";
import { Page } from "@/widgets/Page";
import { InputMail } from "@/shared/ui/InputMail";
import { InputText } from "@/shared/ui/InputText";
import { InputPassword } from "@/shared/ui/InputPassword";
import cls from "@/shared/const/styles/FormPage.module.css";

const RegisterPage = memo(() => {
	const [emailValue, setEmailValue] = useState<string>("");
	const [passwordValue, setPasswordValue] = useState<string>("");
	const [nameValue, setNameValue] = useState<string>("");
	const navigate = useNavigate();

	return (
		<Page className={cls.container}>
			<p className="text text_type_main-medium">Регистрация</p>

			<form className={cls.form}>
				<InputText
					value={nameValue}
					onChange={setNameValue}
					placeholder="Имя"
					name="name"
				/>
				<InputMail value={emailValue} onChange={setEmailValue} />
				<InputPassword
					value={passwordValue}
					onChange={setPasswordValue}
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					onClick={() => console.log("register")}
				>
					{/* TODO */}
					{false ? "Регистрация..." : "Зарегистрироваться"}
				</Button>
			</form>

			<p className="text text_type_main-default text_color_inactive">
				Уже зарегистрированы?{" "}
				<span
					className={cls.link}
					onClick={() => navigate(getRouteLogin())}
				>
					Войти
				</span>
			</p>
		</Page>
	);
});

export default RegisterPage;
