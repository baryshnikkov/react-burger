import styles from './forgot-password-page.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, fetchForgotPassword } from '../../../../services/actions/resetPassword';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, request } = useSelector(store => store.resetPassword);

  return (
    <div className={`${styles.container} mt-30`}>
      <p className="text text_type_main-medium">
        Восстановление пароля
      </p>

      <form className={styles.form}>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          size={'default'}
          value={email}
          onChange={e => dispatch(setEmail(e.target.value))}
          name={'email'}
        />
        <Button htmlType="button" type="primary" size="medium" onClick={() => dispatch(fetchForgotPassword(email))}>
          {request ? 'Загрузка...' : 'Восстановить'}
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль? <span className={styles.link} onClick={() => navigate('/login')}>Войти</span>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
