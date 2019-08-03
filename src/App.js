import React from 'react';
import Options from './Options.js';
import Display from './Display.js';
import Drumpad from './Drumpad.js';
import './App.css';
import getDefaultPadToSounds from './getDefaultPadToSounds.js';
import getDefaultSoundEffects from './getDefaultSoundEffects.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			power : false,
			padToSounds : getDefaultPadToSounds(),
			soundEffects : getDefaultSoundEffects()
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
					padToSounds={this.state.padToSounds}
					soundEffects={this.state.soundEffects}
				/>
				<Display
					padToSounds={this.state.padToSounds}
					soundEffects={this.state.soundEffects}
				/>
				<Drumpad
					soundEffects={this.state.soundEffects}
					padToSounds={this.state.padToSounds} 
				/>
			</div>
		);
	}	
}

export default App;
