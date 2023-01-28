import styles from './login-page.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../services/actions/userProcessing';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoginRequest, isLoginSuccess } = useSelector(store => store.userProcessing);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const authorizationUser = () => {
    dispatch(loginUser(emailValue, passwordValue));
    navigate('/', { replace: true })
  };

  const page = (
    <div className={`${styles.container} mt-30`}>
      <p className="text text_type_main-medium">
        Вход
      </p>

      <form className={styles.form}>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          size={'default'}
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          name={'email'}
        />
        <PasswordInput
          placeholder={'Пароль'}
          size={'default'}
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
          name={'password'}
        />
        <Button htmlType="button" type="primary" size="medium" onClick={authorizationUser}>
          {isLoginRequest ? 'Загрузка...' : 'Войти'}
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вы – новый пользователь? <span className={styles.link} onClick={() => navigate('/register')}>Зарегистрироваться</span>
      </p>

      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль? <span className={styles.link} onClick={() => navigate('/forgot-password')}>Восстановить пароль</span>
      </p>
    </div>
  );

  return (
    isLoginSuccess ? <Navigate to='/' replace /> : page
  );
};

export default LoginPage;
