import { Navbar } from "@/widgets/Navbar";
import { AppRouter } from "./providers/Router/ui/AppRouter";
import "./styles/index.css";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { getInited, userActions } from "@/entities/User";
import { useSelector } from "react-redux";

function App() {
	const inited = useSelector(getInited);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initAuth());
	}, []);

	return (
		<>
			<Navbar />
			{inited && <AppRouter />}
		</>
	);
}

export default App;
