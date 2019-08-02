import React from 'react';
import Options from './Options.js';
import Display from './Display.js';
import Drumpad from './Drumpad.js';
import './App.css';
import getDefaultPadToSound from './getDefaultPadToSound.js';
import getDefaultSounds from './getDefaultSounds.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			power : false,
			padToSound : getDefaultPadToSound(),
			sounds : getDefaultSounds()
		};
		this.togglePower = this.togglePower.bind(this);
	}
	
	togglePower() {
		let res;
		if(this.state.power)
			res = false;
		else 
			res = true;
		this.setState({
			power : res
		});
	}
	
	render() {
		return (
			<div className="App">
				<Options 
					padToSound={this.state.padToSound}
					sounds={this.state.sounds}
				/>
				<Display
					padToSound={this.state.padToSound}
					sounds={this.state.sounds}
				/>
				<Drumpad
					sounds={this.state.sounds}
					padToSound={this.state.padToSound} 
				/>
			</div>
		);
	}	
}

export default App;
