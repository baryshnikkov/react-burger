import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-constructor.module.css';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {

  const totalCalculation = () => {
    let count = 0;
    props.products.other.forEach(el => {
      count += el['price'];
    });
    return count;
  }

  return (
    <div className={[styles.container, 'mt-25'].join(' ')}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={props.products.bun['name'] + ' (верх)'}
        price={200}
        thumbnail={props.products.bun['image']}
      />

      <div className={styles.ingredients}>
        {props.products.other.map(el => (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }} key={el['_id']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={el['price']}
              thumbnail={el['image']}
            />
          </div>
        ))}
      </div>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={props.products.bun['name'] + ' (низ)'}
        price={200}
        thumbnail={props.products.bun['image']}
      />

      <div className={styles.oder}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{totalCalculation()}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>

    </div>
  );
}

BurgerConstructor.propTypes = {
  products: PropTypes.object,
}

export default BurgerConstructor;
