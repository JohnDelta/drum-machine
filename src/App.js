import React from 'react';
import Options from './Options.js';
import Display from './Display.js';
import Drumpad from './Drumpad.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Options />
			<Display />
			<Drumpad />
		</div>
	);
}

export default App;
