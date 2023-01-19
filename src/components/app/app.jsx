import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './app.module.css';
import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <MainContainer>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </MainContainer>
    </>
  );
}

export default App;
