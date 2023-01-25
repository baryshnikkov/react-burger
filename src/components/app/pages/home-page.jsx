import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerConstructor from "../../burger-constructor/burger-constructor";
import BurgerIngredients from "../../burger-ingredients/burger-ingredients";
import MainContainer from "../../main-container/main-container";


const HomePage = () => {
  return (
    <MainContainer>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </MainContainer>
  );
};

export default HomePage;
