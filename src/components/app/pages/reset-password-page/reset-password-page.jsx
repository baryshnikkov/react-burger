import styles from './reset-password-page.module.css';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {useNavigate, Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {resetPassword} from '../../../../services/actions/userProcessing';

const getUserData = store => store.userProcessing;

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {resetPasswordRequest, forgotPasswordSuccess} = useSelector(getUserData);
  const [passwordValue, setPasswordValue] = useState('');
  const [tokenValue, setTokenValue] = useState('');

  const page = (
    <div className={`${styles.container} mt-30`}>
      <p className="text text_type_main-medium">
        Восстановление пароля
      </p>

      <form className={styles.form}>
        <PasswordInput
          onChange={e => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={'password'}
          extraClass="mb-2"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          size={'default'}
          value={tokenValue}
          onChange={e => setTokenValue(e.target.value)}
          name={'name'}
        />
        <Button htmlType="button" type="primary" size="medium"
                onClick={() => dispatch(resetPassword(passwordValue, tokenValue, () => navigate('/', {replace: true})))}>
          {resetPasswordRequest ? 'Загрузка...' : 'Сохранить'}
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль? <span className={styles.link} onClick={() => navigate('/login')}>Войти</span>
      </p>
    </div>
  );

  return (
    forgotPasswordSuccess ? page : <Navigate to='/forgot-password' replace/>
  );
};

export default ResetPasswordPage;
