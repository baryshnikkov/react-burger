import React from 'react';
import styles from './order-statistics.module.css';
import PropTypes from "prop-types";

const OrderStatistics = (props) => {

  return (
    <div className={styles.orderStatistics}>
      <div className={styles.orderNumbers}>
        <div className={styles.numbersBlock}>
          <p className="text text_type_main-medium">
            Готовы:
          </p>
          <div className={styles.numbersList} style={{color: '#0CC'}}>
            {props.status.ready.map(el =>
              <p className="text text_type_digits-default" key={el}>{`#${el}`}</p>
            )}
          </div>
        </div>
        <div className={styles.numbersBlock}>
          <p className="text text_type_main-medium">
            В работе:
          </p>
          <div className={styles.numbersList}>
            {props.status.inProcess.map(el =>
              <p className="text text_type_digits-default" key={el}>{`#${el}`}</p>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <p className="text text_type_main-medium">
          Выполнено за все время:
        </p>
        <p className="text text_type_digits-large">{props.total}</p>
      </div>
      <div className="row">
        <p className="text text_type_main-medium">
          Выполнено за сегодня:
        </p>
        <p className="text text_type_digits-large">{props.totalToday}</p>
      </div>
    </div>
  );
};

OrderStatistics.propTypes = {
  total: PropTypes.number,
  totalToday: PropTypes.number,
  status: PropTypes.object
}

export default OrderStatistics;
