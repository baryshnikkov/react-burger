import { RefObject, memo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TabIngredientVariants } from "../model/types/tabIngredients";
import cls from "./TabIngredients.module.css";

interface TabIngredientsProps {
	currentTab: string;
	bunsRef: RefObject<HTMLHeadingElement>;
	mainRef: RefObject<HTMLHeadingElement>;
	saucesRef: RefObject<HTMLHeadingElement>;
	ingredientsListRef: RefObject<HTMLDivElement>;
}

const additionalElementHeight = 245;
const animationSpeed = 1000;
const animationDuration = 1000;

const scrollToTypeIngredient = (
	targetRef: RefObject<HTMLHeadingElement>,
	containerRef: RefObject<HTMLDivElement>
) => {
	if (containerRef.current && targetRef.current) {
		const container = containerRef.current;
		const target = targetRef.current;
		const targetOffsetTop = target.offsetTop;
		const containerScrollTop = container.scrollTop;
		const distance =
			targetOffsetTop - containerScrollTop - additionalElementHeight;
		const speed = animationSpeed;

		const duration = (Math.abs(distance) / speed) * animationDuration;

		const startTime = performance.now();

		const animation = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / duration, 1);
			const distancePerFrame = distance * progress;

			container.scrollTop = containerScrollTop + distancePerFrame;

			if (elapsedTime < duration) {
				requestAnimationFrame(animation);
			}
		};

		requestAnimationFrame(animation);
	}
};

export const TabIngredients = memo((props: TabIngredientsProps) => {
	const { currentTab, bunsRef, mainRef, saucesRef, ingredientsListRef } =
		props;

	const onTab = (value: TabIngredientVariants) => () => {
		const dataRefs = {
			main: mainRef,
			buns: bunsRef,
			sauces: saucesRef,
		};

		scrollToTypeIngredient(dataRefs[value], ingredientsListRef);
	};

	return (
		<div className={cls.tabs}>
			<Tab
				value="buns"
				active={currentTab === "buns"}
				onClick={onTab("buns")}
			>
				Булки
			</Tab>
			<Tab
				value="sauces"
				active={currentTab === "sauces"}
				onClick={onTab("sauces")}
			>
				Соусы
			</Tab>
			<Tab
				value="main"
				active={currentTab === "main"}
				onClick={onTab("main")}
			>
				Начинки
			</Tab>
		</div>
	);
});
