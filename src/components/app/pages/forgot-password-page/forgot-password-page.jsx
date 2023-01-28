import styles from './forgot-password-page.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { forgotPassword } from '../../../../services/actions/userProcessing';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { forgotPasswordRequest, isLoginSuccess } = useSelector(store => store.userProcessing);
  const [emailValue, setEmailValue] = useState('');

  const page = (
    <div className={`${styles.container} mt-30`}>
      <p className="text text_type_main-medium">
        Восстановление пароля
      </p>

      <form className={styles.form}>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          size={'default'}
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          name={'email'}
        />
        <Button htmlType="button" type="primary" size="medium" onClick={() => dispatch(forgotPassword(emailValue))}>
          {forgotPasswordRequest ? 'Загрузка...' : 'Восстановить'}
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль? <span className={styles.link} onClick={() => navigate('/login')}>Войти</span>
      </p>
    </div>
  );

  return (
    isLoginSuccess ? <Navigate to='/' replace /> : page
  );
};

export default ForgotPasswordPage;
