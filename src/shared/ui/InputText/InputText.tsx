import { ChangeEvent, memo, useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

interface InputTextProps {
	value: string;
	onChange: (newValue: string) => void;
	placeholder: string;
	name: string;
}

export const InputText = memo((props: InputTextProps) => {
	const { value, onChange, placeholder, name } = props;
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorText, setErrorText] = useState<string | undefined>(undefined);

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
			const isValidLength = value.length >= 3 && value.length <= 24;
			setIsValid(isValidLength);
			setErrorText("Длина должна быть от 3 до 24 символов");
		}
	};

	return (
		<Input
			type={"text"}
			placeholder={placeholder}
			size={"default"}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onBlur={handleBlur}
			onFocus={handleFocus}
			name={name}
			error={!isValid && !isFocused}
			errorText={errorText}
			maxLength={24}
			minLength={3}
		/>
	);
});
