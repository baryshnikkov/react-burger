import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Page } from '@/widgets/Page';
import { InputPassword } from '@/shared/ui/InputPassword';
import { InputText } from '@/shared/ui/InputText';
import { getRouteLogin } from '@/shared/const/router';
import cls from '@/shared/const/styles/FormPage.module.css';
import { cn } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getIsLoadingResetPassword } from './model/selectors/getIsLoadingResetPassword';
import { fetchResetPassword } from './model/services/fetchResetPassword';

const ResetPasswordPage = memo(() => {
	const [passwordValue, setPasswordValue] = useState('');
	const [tokenValue, setTokenValue] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getIsLoadingResetPassword);

	const onNavigate = (route: string) => () => {
		navigate(route);
	};

	const onResetPassword = () => {
		dispatch(
			fetchResetPassword({
				password: passwordValue,
				token: tokenValue,
			})
		).then((res: any) => {
			if (res.payload?.success) {
				navigate(getRouteLogin());
			}
		});
	};

	return (
		<Page className={cn(cls.container, {}, ['mt-30'])}>
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
					maxLength={36}
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					onClick={onResetPassword}
				>
					{isLoading ? 'Загрузка...' : 'Сохранить'}
				</Button>
			</form>

			<p className="text text_type_main-default text_color_inactive">
				Вспомнили пароль?{' '}
				<span
					className={cls.link}
					onClick={onNavigate(getRouteLogin())}
				>
					Войти
				</span>
			</p>
		</Page>
	);
});

export default ResetPasswordPage;

ResetPasswordPage.displayName = 'ResetPasswordPage';
