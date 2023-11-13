import { cn } from "@/shared/lib/helpers/classNames";
import cls from "./IngredientPictures.module.css";

interface IngredientPicturesProps {
	images: string[];
}

export const IngredientPictures = (props: IngredientPicturesProps) => {
	const { images } = props;

	return (
		<div className={cls.IngredientPictures}>
			{images.slice(0, 6).map((el: string, index: number) => (
				<div className={cls.ingredient} key={index}>
					<img
						className={cls.img}
						src={el}
						alt="Иконка ингредиента"
					/>
				</div>
			))}
			{images.length > 6 && (
				<p
					className={cn(cls.overlay, {}, [
						"text",
						"text_type_main-default",
						"text_color_inactive",
					])}
				>
					{`+${images.length - 5}`}
				</p>
			)}
		</div>
	);
};
