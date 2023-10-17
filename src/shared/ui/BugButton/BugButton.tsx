import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { memo, useEffect, useState } from "react";

export const BugButton = memo(() => {
	const [error, setError] = useState(false);

	const onThrowError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<Button
			onClick={onThrowError}
			htmlType="button"
			type="primary"
			size="medium"
		>
			Вызвать ошибку
		</Button>
	);
});
