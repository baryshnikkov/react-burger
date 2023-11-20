import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { authByMail, getIsLoadingAuthByMail } from '@/features/AuthUser';

import { getRouteLogin } from '@/shared/const/router';
import cls from '@/shared/const/styles/FormPage.module.css';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { InputMail } from '@/shared/ui/InputMail';
import { InputPassword } from '@/shared/ui/InputPassword';
import { InputText } from '@/shared/ui/InputText';

const RegisterPage = memo(() => {
	const [emailValue, setEmailValue] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');
	const [nameValue, setNameValue] = useState<string>('');
	const isLoading = useSelector(getIsLoadingAuthByMail);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onRegister = () => {
		dispatch(
			authByMail({
				name: nameValue,
				password: passwordValue,
				email: emailValue,
			})
		);
	};

	return (
		<Page className={cls.container}>
			<p className='text text_type_main-medium'>Регистрация</p>

			<form className={cls.form}>
				<InputText
					value={nameValue}
					onChange={setNameValue}
					placeholder='Имя'
					name='name'
				/>
				<InputMail value={emailValue} onChange={setEmailValue} />
				<InputPassword
					value={passwordValue}
					onChange={setPasswordValue}
				/>
				<Button
					htmlType='button'
					type='primary'
					size='medium'
					onClick={onRegister}
				>
					{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
				</Button>
			</form>

			<p className='text text_type_main-default text_color_inactive'>
				Уже зарегистрированы?{' '}
				<span
					className={cls.link}
					onClick={() => {
						navigate(getRouteLogin());
					}}
				>
					Войти
				</span>
			</p>
		</Page>
	);
});

export default RegisterPage;

RegisterPage.displayName = 'RegisterPage';
