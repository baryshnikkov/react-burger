import {useDispatch, useSelector} from 'react-redux';

import styles from './oder.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {setOder} from '../../../../services/actions/oder';
import {useNavigate} from "react-router-dom";

const getConstructorIngredients = store => store.constructorIngredients;
const getOder = store => store.oder;
const getUserStatus = store => store.userProcessing;

function Oder() {
  const {constructorIngredients, totalPrice} = useSelector(getConstructorIngredients);
  const {ingredientsOderRequest} = useSelector(getOder);
  const {isLoginSuccess} = useSelector(getUserStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openOrderDetails = () => {
    if (isLoginSuccess) {
    dispatch(setOder(constructorIngredients));
    } else {
      navigate('/login');
    }
  };

  const buttonText = ingredientsOderRequest ? 'Загрузка...' : 'Оформить заказ';

  return (
    <div className={styles.oder}>
      <div className={styles.price}>
        <p className="text text_type_digits-medium">{totalPrice}</p>
        <CurrencyIcon type="primary"/>
      </div>

      <Button id="checkout" htmlType="button" type="primary" size="medium" onClick={openOrderDetails}>
        {buttonText}
      </Button>
    </div>
  );
}

export default Oder;
