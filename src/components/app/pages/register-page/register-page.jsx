import styles from './register-page.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  return (
    <div className={`${styles.container} mt-30`}>
      <p className="text text_type_main-medium">
        Регистрация
      </p>

      <form className={styles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          size={'default'}
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          name={'name'}
        />
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
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Уже зарегистрированы? <span className={styles.link} onClick={() => navigate('/login')}>Войти</span>
      </p>
    </div>
  );
};

export default RegisterPage;
