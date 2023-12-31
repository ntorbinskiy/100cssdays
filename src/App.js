import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Fourth from "./components/Foutrh/Fourth";
import Fifth from "./components/Fifth/Fifth";
import Sixth from "./components/Sixth/Sixth";
import "./App.css";
import Seventh from "./components/Seventh/Seventh";
import { motion } from "framer-motion";

function App() {
	return (
		<motion.div
			className="main"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeOut", duration: 1 }}>
			<span className="animate-charcter">100 CSS DAYS CHALLENGE</span>
			<div className="App">
				<First />
				<Second />
				<Third />
				<Fourth />
				<Fifth />
				<Sixth />
				<Seventh />
			</div>
		</motion.div>
	);
}

export default App;
