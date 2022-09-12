import First from './components/First/First';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Fourth from './components/Foutrh/Fourth';
import Fifth from './components/Fifth/Fifth';
import Sixth from './components/Sixth/Sixth';
import './App.css';
import Seventh from './components/Seventh/Seventh';
function App() {
	return (
		<div className='main'>
			<div className="animate-charcter">
				100 CSS DAYS CHALLENGE
			</div>
			<div className="App">
				<First />
				<Second />
				<Third />
				<Fourth/>
				<Fifth/>
				<Sixth/>
				<Seventh/>
			</div>
		</div>

	);
}

export default App;
