import React from 'react';

import styles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Cards from '../cards/cards';
import Card from '../card/card';

import roll_N200i from '../../images/rolls/roll-N-200i.png';
import roll_R2D2 from '../../images/rolls/roll-R2-D3.png';
import sauce_flathead from '../../images/sauces/flathead-sauce.png';
import sauce_traditional from '../../images/sauces/sauce-traditional.png';
import space_sauce from '../../images/sauces/space-sauce.png';
import spicy_x from '../../images/sauces/spicy-x.png';
import fluorescent_file from '../../images/fillings/fluorescent-file.png';
import meat_protostomia from '../../images/fillings/meat-protostomia.png';
import beef_meteorite from '../../images/fillings/beef-meteorite.png';
import biocutlet from '../../images/fillings/biocutlet.png';
import tree_fruit from '../../images/fillings/tree-fruit.png';
import alpha_saccharides from '../../images/fillings/alpha-saccharides.png';
import mineral_rings from '../../images/fillings/mineral-rings.png';
import exo_plantago from '../../images/fillings/exo-plantago.png';
import cheese from '../../images/fillings/cheese.png';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('rolls')

  const [rolls, setRolls] = React.useState(
    [{
      id: 1,
      img: roll_N200i,
      text: 'Краторная булка N-200i',
      price: 20,
      alt: 'Булка',
      count: 1
    }, {
      id: 2,
      img: roll_R2D2,
      text: 'Флюоресцентная булка R2-D3',
      price: 20,
      alt: 'Булка',
      count: 0
    }]);

  const [sauces, setSauces] = React.useState(
    [{
      id: 1,
      img: spicy_x,
      text: 'Соус Spicy-X',
      price: 30,
      alt: 'Соус',
      count: 2
    }, {
      id: 2,
      img: space_sauce,
      text: 'Соус фирменный Space Sauce',
      price: 30,
      alt: 'Соус',
      count: 0
    }, {
      id: 3,
      img: sauce_traditional,
      text: 'Соус традиционный галактический',
      price: 30,
      alt: 'Соус',
      count: 0
    }, {
      id: 4,
      img: sauce_flathead,
      text: 'Соус с шипами Антарианского плоскоходца',
      price: 30,
      alt: 'Соус',
      count: 0
    }]);

  const [fillings, setFillings] = React.useState(
    [{
      id: 1,
      img: fluorescent_file,
      text: 'Филе Люминесцентного тетраодонтимформа',
      price: 300,
      alt: 'Начинки',
      count: 0
    }, {
      id: 2,
      img: meat_protostomia,
      text: 'Мясо бессмертных моллюсков Protostomia',
      price: 300,
      alt: 'Начинки',
      count: 0
    }, {
      id: 3,
      img: beef_meteorite,
      text: 'Говяжий метеорит (отбивная)',
      price: 300,
      alt: 'Начинки',
      count: 0
    }, {
      id: 4,
      img: biocutlet,
      text: 'Говяжий метеорит (отбивная)',
      price: 300,
      alt: 'Начинки',
      count: 0
    }, {
      id: 5,
      img: tree_fruit,
      text: 'Плоды фалленианского дерева',
      price: 80,
      alt: 'Начинки',
      count: 0
    }, {
      id: 6,
      img: alpha_saccharides,
      text: 'Кристаллы марсианских альфа-сахаридов',
      price: 80,
      alt: 'Начинки',
      count: 0
    }, {
      id: 7,
      img: mineral_rings,
      text: 'Хрустящие минеральные кольца',
      price: 80,
      alt: 'Начинки',
      count: 0
    }, {
      id: 8,
      img: exo_plantago,
      text: 'Мини-салат Экзо-Плантаго',
      price: 80,
      alt: 'Начинки',
      count: 0
    }, {
      id: 9,
      img: cheese,
      text: 'Сыр с астероидной плесенью',
      price: 80,
      alt: 'Начинки',
      count: 0
    }]);

  return (
    <div className={styles.container}>

      <h1 className={['text', 'text_type_main-large', 'mt-10', 'mb-5'].join(' ')}>
        Соберите бургер
      </h1>

      <div style={{ display: 'flex' }}>
        <Tab value="rolls" active={current === 'rolls'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
        Булки
      </h2>

      <Cards>
        {rolls.map(el => (
          <Card {...el} key={el.id} />
        ))}
      </Cards>

      <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
        Соусы
      </h2>

      <Cards>
        {sauces.map(el => (
          <Card {...el} key={el.id} />
        ))}
      </Cards>

      <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
        Начинки
      </h2>

      <Cards>
        {fillings.map(el => (
          <Card {...el} key={el.id} />
        ))}
      </Cards>

    </div>
  );
}

export default BurgerIngredients;
