import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#modal');

function Modal(props) {
  const closeModalByClick = () => {
    props.closeModal();
  };

  const closeModalByEsc = (evt) => {
    console.log(evt.key);
    if (evt.key === 'Escape') {
      props.closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    }
  }, []);

  return ReactDOM.createPortal(
    (
      <ModalOverlay closeModal={closeModalByClick}>
        <div className={styles.container}>
          <div className={styles.close} onClick={closeModalByClick}>
            <CloseIcon type="primary" />
          </div>
          {props.children}
        </div>
      </ModalOverlay>
    ),
    modalRoot
  );
}

export default Modal;
