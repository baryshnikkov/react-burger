import React, { useEffect } from 'react';

import styles from './ingredient-details.module.css';

import Modal from '../modal/modal';

function IngredientDetails(props) {
  const [isOpened, setIsOpened] = React.useState(false);

  const closeIngredientDetails = () => {
    setIsOpened(false);
  };

  useEffect(() => {
    setIsOpened(true);
  }, [props.details]);

  return (
    <>
      {props.details?.name && isOpened &&
        <Modal closeModal={closeIngredientDetails}>
          <div className={styles.container}>
            <p className={['text', 'text_type_main-large', styles.title].join(' ')}>
              Детали ингредиента
            </p>

            <img className={styles.image} src={props.details?.image} alt="" />

            <p className={['text', 'text_type_main-medium', styles.description].join(' ')}>
              {props.details?.name}
            </p>

            <div className={styles.compound}>

              <div className={styles.bju}>
                <p className="text text_type_main-default text_color_inactive">
                  Калории,ккал
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.details?.calories}
                </p>
              </div>

              <div className={styles.bju}>
                <p className="text text_type_main-default text_color_inactive">
                  Белки, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.details?.proteins}
                </p>
              </div>

              <div className={styles.bju}>
                <p className="text text_type_main-default text_color_inactive">
                  Жиры, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.details?.fat}
                </p>
              </div>

              <div className={styles.bju}>
                <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.details?.carbohydrates}
                </p>

              </div>
            </div>
          </div>
        </Modal>
      }
    </>
  );
}

export default IngredientDetails;
