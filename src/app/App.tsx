import { Navbar } from "@/widgets/Navbar";
import { AppRouter } from "./providers/Router/ui/AppRouter";
import "./styles/index.css";

function App() {
	return (
		<>
			<Navbar />
			<AppRouter />
		</>
	);
}

export default App;
