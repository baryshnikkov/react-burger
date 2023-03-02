import {Outlet, useNavigate} from 'react-router-dom';
import Navigation from './navigation/navigation';

import styles from './profile-page.module.css';
import ModalContainer from "../../../modal-container/modal-container";
import OrderModal from "../../../order-modal/order-modal";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_DATA_ABOUT_ORDER_DETAILS} from "../../../../services/actions/orderDetails";

const getOrderDetails = store => store.orderDetails;

const ProfilePage = (props) => {
  const {orderDetailsIsOpened} = useSelector(getOrderDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeIngredientDetails = () => {
    dispatch({
      type: DELETE_DATA_ABOUT_ORDER_DETAILS
    });
    navigate('/profile/orders', {replace: true});
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <Navigation/>
          <p className={`${styles.description} text text_type_main-default text_color_inactive`}>
            В этом разделе вы можете изменить&nbsp;свои персональные данные
          </p>
        </div>
        <Outlet/>
        {!!props.element && props.element}
      </div>
      {
        orderDetailsIsOpened
        &&
        <ModalContainer closeModal={closeIngredientDetails}>
          <OrderModal/>
        </ModalContainer>
      }
    </>
  );
};

export default ProfilePage;
