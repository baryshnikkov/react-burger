import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

function ModalOverlay(props) {
  const closeModal = (evt) => {
    if (evt.target.classList.contains(styles.overlay)) {
      props.closeModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ModalOverlay;
