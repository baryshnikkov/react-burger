import React from 'react';

import styles from './main-container.module.css'

function MainContainer(props) {
  return (
    <main className={[styles.content, 'pl-8', 'pr-8'].join(' ')}>
      {props.children}
    </main>
  );
}

export default MainContainer;
