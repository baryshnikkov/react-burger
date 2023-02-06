import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import styles from './card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import {useNavigate} from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  const openIngredientDetails = () => {
    navigate(`ingredients/${props['_id']}`, {state: {ingredient: props, background: 'home'}});
  };

  const [{ opacity }, refDrag] = useDrag({
    type: 'ingredient',
    item: { ...props },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <div className={styles.card} onClickCapture={openIngredientDetails} ref={refDrag} style={{ opacity }}>
      {Boolean(props.count) && <Counter count={props.count} size="default" extraClass="m-1" />}
      <img className={styles.img} src={props.image} alt={props.name} />
      <div className={styles.price}>
        <p className={'text text_type_digits-default'}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.description} text text_type_main-default`}>{props.name}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  __v: PropTypes.number.isRequired,
}

export default Card;
