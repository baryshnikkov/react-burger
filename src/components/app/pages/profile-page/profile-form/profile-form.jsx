import styles from './profile-form.module.css';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

const ProfileForm = () => {
  return (
    <div className={styles.container}>

      <PasswordInput
        placeholder={'Имя'}
        type={'text'}
        error={false}
        onChange={() => { }}
        value={'Марк'}
        name={'name'}
        icon="EditIcon"
      />

      <PasswordInput
        placeholder={'Логин'}
        type={'text'}
        error={false}
        onChange={() => { }}
        value={'mail@stellar.burgers'}
        name={'email'}
        icon="EditIcon"
      />

      <PasswordInput
        onChange={() => { }}
        value={'123'}
        name={'password'}
        icon="EditIcon"
      />
    </div>
  );
};

export default ProfileForm;
