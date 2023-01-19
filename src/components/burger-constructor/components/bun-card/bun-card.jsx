import styles from './bun-card.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BunCard({ content, type }) {
  const sideOfTheBun = type === 'top' ? ' (верх)' : ' (низ)';

  return (
    <div className={styles.container}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={content.name + sideOfTheBun}
        price={content.price}
        thumbnail={content.image}
      />
    </div>
  );
}

export default BunCard;
