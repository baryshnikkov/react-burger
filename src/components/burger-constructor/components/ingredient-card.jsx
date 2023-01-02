import React, { useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

import styles from './ingredient-card.module.css';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_INGREDIENT_FOR_CONSTRUCTOR, SET_TOTAL_PRICE } from '../../../services/actions/constructorIngredients';
import { DECREMENT_INGREDIENT } from '../../../services/actions/ingredients';

function IngredientCard(props) {
  const { index, moveIngredient, ...ingredient } = props;
  const dispatch = useDispatch();

  const deleteIngredient = (el) => {
    dispatch({
      type: DELETE_INGREDIENT_FOR_CONSTRUCTOR,
      id: el._id
    });
    dispatch({
      type: DECREMENT_INGREDIENT,
      id: el._id,
      sort: el.type
    });
    dispatch({
      type: SET_TOTAL_PRICE
    });
  };

  const [{ isDragging }, dragMoveRef] = useDrag({
    type: 'item',
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropMoveRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveIngredient(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragMoveRef(dropMoveRef(ref))

  const className = `${styles.card} ${isDragging ? styles.drag : ''}`

  return (
    <div className={className} ref={dragDropRef}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => { deleteIngredient(ingredient) }}
      />
    </div>
  );
}

export default IngredientCard;
