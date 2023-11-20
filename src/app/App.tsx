import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '@/widgets/Navbar';

import { getInited, updateAccessToken, userActions } from '@/entities/User';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { AppRouter } from './providers/Router/ui/AppRouter';
import './styles/index.css';

function App() {
	const inited = useSelector(getInited);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!inited) {
			dispatch(userActions.initAuth());
		}
	}, [dispatch]);

	useEffect(() => {
		const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
		if (token) {
			dispatch(updateAccessToken({ token: JSON.parse(token) }));
		}
	}, [dispatch]);

	return (
		<>
			<Navbar />
			{inited && <AppRouter />}
		</>
	);
}

export default App;
