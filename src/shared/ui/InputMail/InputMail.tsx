import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { type ChangeEvent, memo, useEffect, useState } from 'react';

interface InputMailProps {
	value: string;
	onChange: (newValue: string) => void;
	isEdit?: boolean;
	isChangeValue?: boolean;
}

export const InputMail = memo((props: InputMailProps) => {
	const { value, onChange, isEdit, isChangeValue } = props;
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
			const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			setIsValid(mailFormat.test(value));
			setErrorText('Неправильный формат email');
		}
	};

	useEffect(() => {
		if (isChangeValue === false) {
			setIsViewValue(false);
		}
	}, [isChangeValue]);

	return (
		<Input
			type={'email'}
			placeholder={'E-mail'}
			size={'default'}
			value={value}
			onChange={handleInputChange}
			onBlur={handleBlur}
			onFocus={handleFocus}
			name={'email'}
			error={!isValid && !isFocused}
			errorText={errorText}
			autoComplete="email"
			// @ts-expect-error
			icon={isEdit && (isViewValue ? 'CloseIcon' : 'EditIcon')}
			onIconClick={() => {
				setIsViewValue((prev) => !prev);
			}}
			disabled={isEdit && !isViewValue}
		/>
	);
});

InputMail.displayName = 'InputMail';
