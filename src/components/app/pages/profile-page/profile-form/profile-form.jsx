import styles from './profile-form.module.css';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { getCookie } from '../../../../../utils/utils';
import { BASE_URL, checkResponse, ENDPOINT } from '../../../../../utils/api';

const ProfileForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const getUserData = () => {
    fetch(BASE_URL + ENDPOINT.DATA_USER, {
      method: 'GET',
      headers: {
        authorization: getCookie('accessToken')
      }
    })
      .then(res => checkResponse(res))
      .then((data) => {
        setNameValue(data.user.name);
        setEmailValue(data.user.email);
        setPasswordValue('');
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleClickSave = () => {
    const values = passwordValue ? { name: nameValue, email: emailValue, password: passwordValue } : { name: nameValue, email: emailValue }

    fetch(BASE_URL + ENDPOINT.DATA_USER, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie('accessToken')
      },
      body: JSON.stringify({
        ...values
      })
    })
      .then(res => checkResponse(res))
      .then((data) => {
        setNameValue(data.user.name);
        setEmailValue(data.user.email);
        setPasswordValue('');
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  };

  return (
    <div className={styles.container}>

      <PasswordInput
        placeholder={'Имя'}
        type={'text'}
        error={false}
        onChange={(e) => { setNameValue(e.target.value) }}
        value={nameValue}
        name={'name'}
        icon="EditIcon"
      />

      <PasswordInput
        placeholder={'Логин'}
        type={'text'}
        error={false}
        onChange={(e) => { setEmailValue(e.target.value) }}
        value={emailValue}
        name={'email'}
        icon="EditIcon"
      />

      <PasswordInput
        onChange={(e) => { setPasswordValue(e.target.value) }}
        value={passwordValue}
        name={'password'}
        icon="EditIcon"
      />

      <button onClick={handleClickSave}>Save</button>
      <button onClick={getUserData}>Reject</button>
    </div>
  );
};

export default ProfileForm;
