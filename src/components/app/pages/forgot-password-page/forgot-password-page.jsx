import styles from './forgot-password-page.module.css';
import {Input, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {forgotPassword} from '../../../../services/actions/userProcessing';

const getUserData = store => store.userProcessing;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {forgotPasswordRequest} = useSelector(getUserData);
  const [emailValue, setEmailValue] = useState('');

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
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          name={'email'}
        />
        <Button htmlType="button" type="primary" size="medium" onClick={() => {
          dispatch(forgotPassword(emailValue, () => {navigate('/reset-password', {replace: true})}));
        }}>
          {forgotPasswordRequest ? 'Загрузка...' : 'Восстановить'}
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль? <span className={styles.link} onClick={() => navigate('/login')}>Войти</span>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
