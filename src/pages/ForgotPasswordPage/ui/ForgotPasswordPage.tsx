import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputMail } from "@/shared/ui/InputMail";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Page } from "@/widgets/Page";
import cls from "@/shared/const/styles/FormPage.module.css";

const ForgotPasswordPage = memo(() => {
	const [emailValue, setEmailValue] = useState("");
	const navigate = useNavigate();

	return (
		<Page className={`${cls.container} mt-30`}>
			<p className="text text_type_main-medium">Восстановление пароля</p>

			<form className={cls.form}>
				<InputMail value={emailValue} onChange={setEmailValue} />
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					onClick={() => {
						console.log("forgotPassword");
					}}
				>
					{/* TODO */}
					{false ? "Загрузка..." : "Восстановить"}
				</Button>
			</form>

			<p className="text text_type_main-default text_color_inactive">
				Вспомнили пароль?{" "}
				<span className={cls.link} onClick={() => navigate("/login")}>
					Войти
				</span>
			</p>
		</Page>
	);
});

export default ForgotPasswordPage;
