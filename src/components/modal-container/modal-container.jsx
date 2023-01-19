import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal-container.module.css';

import ModalOverlay from './components/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#modal');

function ModalContainer(props) {
  const closeModalByClick = () => {
    props.closeModal();
  };

  useEffect(() => {
    const closeModalByEsc = (evt) => {
      if (evt.key === 'Escape') {
        props.closeModal();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    }
  }, [props]);

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

ModalContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ModalContainer;
