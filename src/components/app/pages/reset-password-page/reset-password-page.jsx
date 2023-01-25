import styles from './reset-password-page.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setToken, fetchResetPassword } from '../../../../services/actions/resetPassword';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { password, token, request } = useSelector(store => store.resetPassword);

  return (
    <div className={`${styles.container} mt-30`}>
      <p className="text text_type_main-medium">
        Восстановление пароля
      </p>

      <form className={styles.form}>
        <PasswordInput
          onChange={e => dispatch(setPassword(e.target.value))}
          value={password}
          name={'password'}
          extraClass="mb-2"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          size={'default'}
          value={token}
          onChange={e => dispatch(setToken(e.target.value))}
          name={'name'}
        />
        <Button htmlType="button" type="primary" size="medium" onClick={() => dispatch(fetchResetPassword(password, token))}>
          {request ? 'Загрузка...' : 'Сохранить'}
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль? <span className={styles.link} onClick={() => navigate('/login')}>Войти</span>
      </p>
    </div>
  );
};

export default ResetPasswordPage;
