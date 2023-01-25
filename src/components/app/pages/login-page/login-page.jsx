import styles from './login-page.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
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
        <Input
          type={'password'}
          placeholder={'Пароль'}
          icon={'HideIcon'}
          size={'default'}
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
          name={'password'}
        />
        <Button htmlType="button" type="primary" size="medium">
          Войти
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
};

export default LoginPage;
