import First from './components/First/First';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import './App.css';
import Fourth from './components/Foutrh/Fourth';
import Fifth from './components/Fifth/Fifth';

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
			</div>
		</div>

	);
}

export default App;
