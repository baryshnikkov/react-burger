import { memo, useRef, useState } from 'react';
import { TabIngredients } from '@/entities/TabIngredients';
import { CardsIngredients } from '@/entities/CardsIngredients';
import cls from './BurgerIngredients.module.css';
import { type TabIngredientVariants } from '@/entities/TabIngredients/model/types/tabIngredients';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

const throttleDelay = 50;
const additionalElementHeight = 160;

export const BurgerIngredients = memo(() => {
	const [currentTab, setCurrentTab] = useState<TabIngredientVariants>('buns');
	const ingredientsListRef = useRef<HTMLDivElement>(null);
	const bunsRef = useRef<HTMLHeadingElement>(null);
	const mainRef = useRef<HTMLHeadingElement>(null);
	const saucesRef = useRef<HTMLHeadingElement>(null);

	const handleScroll = useThrottle(() => {
		if (bunsRef.current && saucesRef.current && mainRef.current && ingredientsListRef.current) {
			if (
				ingredientsListRef.current.getBoundingClientRect().top + additionalElementHeight >
				bunsRef.current.getBoundingClientRect().top
			) {
				setCurrentTab('buns');
			}
			if (
				ingredientsListRef.current.getBoundingClientRect().top + additionalElementHeight >
				saucesRef.current.getBoundingClientRect().top
			) {
				setCurrentTab('sauces');
			}
			if (
				ingredientsListRef.current.getBoundingClientRect().top + additionalElementHeight >
				mainRef.current.getBoundingClientRect().top
			) {
				setCurrentTab('main');
			}
		}
	}, throttleDelay);

	return (
		<div className={cls.BurgerIngredients}>
			<h1 className='text text_type_main-large'>Соберите бургер</h1>
			<TabIngredients
				currentTab={currentTab}
				bunsRef={bunsRef}
				mainRef={mainRef}
				saucesRef={saucesRef}
				ingredientsListRef={ingredientsListRef}
			/>
			<CardsIngredients
				bunsRef={bunsRef}
				mainRef={mainRef}
				saucesRef={saucesRef}
				ingredientsListRef={ingredientsListRef}
				handleScroll={handleScroll}
			/>
		</div>
	);
});

BurgerIngredients.displayName = 'BurgerIngredients';
