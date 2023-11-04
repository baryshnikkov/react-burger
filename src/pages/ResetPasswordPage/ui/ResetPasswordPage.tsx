import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Page } from "@/widgets/Page";
import { InputPassword } from "@/shared/ui/InputPassword";
import { InputText } from "@/shared/ui/InputText";
import { getRouteLogin } from "@/shared/const/router";
import cls from "@/shared/const/styles/FormPage.module.css";

const ResetPasswordPage = memo(() => {
	const [passwordValue, setPasswordValue] = useState("");
	const [tokenValue, setTokenValue] = useState("");
	const navigate = useNavigate();

	return (
		<Page className={`${cls.container} mt-30`}>
			<p className="text text_type_main-medium">Восстановление пароля</p>

			<form className={cls.form}>
				<InputPassword
					value={passwordValue}
					onChange={setPasswordValue}
				/>
				<InputText
					value={tokenValue}
					onChange={setTokenValue}
					name="token"
					placeholder="Введите код из письма"
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					onClick={() => console.log("resetPassword")}
				>
					{/* TODO */}
					{false ? "Загрузка..." : "Сохранить"}
				</Button>
			</form>

			<p className="text text_type_main-default text_color_inactive">
				Вспомнили пароль?{" "}
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

export default ResetPasswordPage;
