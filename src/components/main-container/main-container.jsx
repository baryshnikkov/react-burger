import styles from './main-container.module.css'

function MainContainer({children}) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}

export default MainContainer;
