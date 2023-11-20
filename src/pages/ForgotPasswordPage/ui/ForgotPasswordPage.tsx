import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { getRouteLogin, getRouteResetPassword } from '@/shared/const/router';
import cls from '@/shared/const/styles/FormPage.module.css';
import { cn } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { InputMail } from '@/shared/ui/InputMail';

import { getIsLoadingForgotPassword } from '../model/selectors/getIsLoadingForgotPassword';
import { fetchForgotPassword } from '../model/services/fetchForgotPassword';

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
