import { Page } from "@/widgets/Page";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputMail } from "@/shared/ui/InputMail";
import { InputPassword } from "@/shared/ui/InputPassword";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "@/shared/const/styles/FormPage.module.css";
import {
	getRouteForgotPassword,
	getRouteRegister,
} from "@/shared/const/router";

const LoginPage = memo(() => {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const navigate = useNavigate();

	return (
		<Page className={cls.container}>
			<p className="text text_type_main-medium">Вход</p>

			<form className={cls.form}>
				<InputMail value={emailValue} onChange={setEmailValue} />
				<InputPassword
					value={passwordValue}
					onChange={setPasswordValue}
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					onClick={() => console.log("login")}
				>
					{/* TODO */}
					{false ? "Загрузка..." : "Войти"}
				</Button>
			</form>

			<p className="text text_type_main-default text_color_inactive">
				Вы – новый пользователь?{" "}
				<span
					className={cls.link}
					onClick={() => navigate(getRouteRegister())}
				>
					Зарегистрироваться
				</span>
			</p>

			<p className="text text_type_main-default text_color_inactive">
				Забыли пароль?{" "}
				<span
					className={cls.link}
					onClick={() => navigate(getRouteForgotPassword())}
				>
					Восстановить пароль
				</span>
			</p>
		</Page>
	);
});

export default LoginPage;
