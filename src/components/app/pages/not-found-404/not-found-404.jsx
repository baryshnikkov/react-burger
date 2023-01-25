import styles from './not-found-404.module.css';
import imageEror404 from './error404.svg';
import { useNavigate } from 'react-router-dom';

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <p className="text text_type_main-large">
          Ошибка 404
        </p>
        <p className="text text_type_main-medium">
          Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует.
          Возможно она была удалена, или вы набрали неверный адрес.
          Перейдите на
          нашу <span className={styles.link} onClick={() => navigate('/', { replace: true })}>
          главную страницу</span> и попробуйте найти необходимую вам информацию там.
        </p>
      </div>

      <img className={styles.image} src={imageEror404} alt='Error404' />
    </div>
  );
};

export default NotFound404;


