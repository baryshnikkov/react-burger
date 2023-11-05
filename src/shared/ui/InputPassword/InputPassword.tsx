import { ChangeEvent, memo, useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

interface InputPasswordProps {
	value: string;
	onChange: (newValue: string) => void;
}

export const InputPassword = memo((props: InputPasswordProps) => {
	const { value, onChange } = props;
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorText, setErrorText] = useState<string | undefined>(undefined);
	const [isViewPassword, setIsViewPassword] = useState<"password" | "text">(
		"password"
	);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
		setIsValid(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
		validateInput();
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const validateInput = () => {
		if (!value.trim()) {
			setIsValid(false);
			setErrorText("Это обязательное поле");
		} else {
			const isValidLength = value.length >= 6 && value.length <= 24;
			setIsValid(isValidLength);
			setErrorText("Длина должна быть от 6 до 24 символов");
		}
	};

	return (
		<Input
			type={isViewPassword}
			placeholder={"Пароль"}
			size={"default"}
			value={value}
			onChange={handleInputChange}
			icon={isViewPassword === "password" ? "HideIcon" : "ShowIcon"}
			onIconClick={() => {
				isViewPassword === "password"
					? setIsViewPassword("text")
					: setIsViewPassword("password");
			}}
			name={"password"}
			onBlur={handleBlur}
			onFocus={handleFocus}
			error={!isValid && !isFocused}
			errorText={errorText}
			maxLength={24}
			minLength={6}
			autoComplete="current-password"
		/>
	);
});
