import React, { useEffect } from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';

function App() {
  const [productsForConstructor, setProductsForConstructor] = React.useState({
    bun: {
      "_id": "60666c42cc7b410027a1a9b1",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
    },
    other: [{
      "_id": "60666c42cc7b410027a1a9b5",
      "name": "Говяжий метеорит (отбивная)",
      "type": "main",
      "proteins": 800,
      "fat": 800,
      "carbohydrates": 300,
      "calories": 2674,
      "price": 3000,
      "image": "https://code.s3.yandex.net/react/code/meat-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
      "__v": 0
    }, {
      "_id": "60666c42cc7b410027a1a9b6",
      "name": "Биокотлета из марсианской Магнолии",
      "type": "main",
      "proteins": 420,
      "fat": 142,
      "carbohydrates": 242,
      "calories": 4242,
      "price": 424,
      "image": "https://code.s3.yandex.net/react/code/meat-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
      "__v": 0
    }, {
      "_id": "60666c42cc7b410027a1a9b7",
      "name": "Соус Spicy-X",
      "type": "sauce",
      "proteins": 30,
      "fat": 20,
      "carbohydrates": 40,
      "calories": 30,
      "price": 90,
      "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      "__v": 0
    }, {
      "_id": "60666c42cc7b410027a1a9b4",
      "name": "Мясо бессмертных моллюсков Protostomia",
      "type": "main",
      "proteins": 433,
      "fat": 244,
      "carbohydrates": 33,
      "calories": 420,
      "price": 1337,
      "image": "https://code.s3.yandex.net/react/code/meat-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
      "__v": 0
    }, {
      "_id": "60666c42cc7b410027a1a9b9",
      "name": "Соус традиционный галактический",
      "type": "sauce",
      "proteins": 42,
      "fat": 24,
      "carbohydrates": 42,
      "calories": 99,
      "price": 15,
      "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
      "__v": 0
    }, {
      "_id": "60666c42cc7b410027a1a9b8",
      "name": "Соус фирменный Space Sauce",
      "type": "sauce",
      "proteins": 50,
      "fat": 22,
      "carbohydrates": 11,
      "calories": 14,
      "price": 80,
      "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      "__v": 0
    }, {
      "_id": "60666c42cc7b410027a1a9bc",
      "name": "Плоды Фалленианского дерева",
      "type": "main",
      "proteins": 20,
      "fat": 5,
      "carbohydrates": 55,
      "calories": 77,
      "price": 874,
      "image": "https://code.s3.yandex.net/react/code/sp_1.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
      "__v": 0
    }],
  });
  const [products, setProducts] = React.useState([]);

  const addProductToConstructor = (el) => {
    if (el['type'] === 'bun') {
      setProductsForConstructor({ ...productsForConstructor, bun: el });
    } else {
      setProductsForConstructor({ ...productsForConstructor, other: [...productsForConstructor.other, el] });
    }
  };

  useEffect(() => {
    const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
    fetch(apiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => setProducts(data['data']))
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients products={products} />
        <BurgerConstructor products={productsForConstructor} />
      </MainContainer>
      <OrderDetails />
    </>
  );
}

export default App;
