import { memo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { BurgerIngredients } from '@/widgets/BurgerIngredients';
import { BurgerOrder } from '@/widgets/BurgerOrder';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.css';

const MainPage = memo(() => {
	return (
		<Page className={cls.MainPage}>
			<DndProvider backend={HTML5Backend}>
				<BurgerIngredients />
				<BurgerOrder />
			</DndProvider>
		</Page>
	);
});

export default MainPage;

MainPage.displayName = 'MainPage';
