import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputMail } from '@/shared/ui/InputMail';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Page } from '@/widgets/Page';
import cls from '@/shared/const/styles/FormPage.module.css';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchForgotPassword } from '../model/services/fetchForgotPassword';
import { cn } from '@/shared/lib/helpers/classNames';
import { getRouteLogin, getRouteResetPassword } from '@/shared/const/router';
import { useSelector } from 'react-redux';
import { getIsLoadingForgotPassword } from '../model/selectors/getIsLoadingForgotPassword';

const ForgotPasswordPage = memo(() => {
	const [emailValue, setEmailValue] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getIsLoadingForgotPassword);

	const onForgotPassword = () => {
		dispatch(fetchForgotPassword({ email: emailValue })).then((res: any) => {
			if (res.payload.success) {
				navigate(getRouteResetPassword());
			}
		});
	};

	const onNavigate = (route: string) => () => {
		navigate(route);
	};

	return (
		<Page className={cn(cls.container, {}, ['mt-30'])}>
			<p className='text text_type_main-medium'>Восстановление пароля</p>

			<form className={cls.form}>
				<InputMail value={emailValue} onChange={setEmailValue} />
				<Button htmlType='button' type='primary' size='medium' onClick={onForgotPassword}>
					{isLoading ? 'Загрузка...' : 'Восстановить'}
				</Button>
			</form>

			<p className='text text_type_main-default text_color_inactive'>
				Вспомнили пароль?{' '}
				<span className={cls.link} onClick={onNavigate(getRouteLogin())}>
					Войти
				</span>
			</p>
		</Page>
	);
});

export default ForgotPasswordPage;

ForgotPasswordPage.displayName = 'ForgotPasswordPage';
