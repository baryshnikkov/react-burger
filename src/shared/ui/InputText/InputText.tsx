import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { type ChangeEvent, memo, useEffect, useState } from 'react';

interface InputTextProps {
	value: string;
	onChange: (newValue: string) => void;
	placeholder: string;
	name: string;
	isEdit?: boolean;
	isChangeValue?: boolean;
	maxLength?: number;
}

export const InputText = memo((props: InputTextProps) => {
	const {
		value,
		onChange,
		placeholder,
		name,
		isEdit,
		isChangeValue,
		maxLength = 24,
	} = props;
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorText, setErrorText] = useState<string | undefined>(undefined);
	const [isViewValue, setIsViewValue] = useState<boolean>(false);

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
			setErrorText('Это обязательное поле');
		} else {
			const isValidLength =
				value.length >= 3 && value.length <= maxLength;
			setIsValid(isValidLength);
			setErrorText(`Длина должна быть от 3 до ${maxLength} символов`);
		}
	};

	useEffect(() => {
		if (isChangeValue === false) {
			setIsViewValue(false);
		}
	}, [isChangeValue]);

	return (
		<Input
			type={'text'}
			placeholder={placeholder}
			size={'default'}
			value={value}
			onChange={handleInputChange}
			onBlur={handleBlur}
			onFocus={handleFocus}
			name={name}
			error={!isValid && !isFocused}
			errorText={errorText}
			maxLength={maxLength}
			minLength={3}
			// @ts-expect-error
			icon={isEdit && (isViewValue ? 'CloseIcon' : 'EditIcon')}
			onIconClick={() => {
				setIsViewValue((prev) => !prev);
			}}
			disabled={isEdit && !isViewValue}
		/>
	);
});

InputText.displayName = 'InputText';
