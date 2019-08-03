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
			volume : 45,
			padToSounds : getDefaultPadToSounds(),
			soundEffects : getDefaultSoundEffects()
		};
		this.togglePower = this.togglePower.bind(this);
		this.updateVolume = this.updateVolume.bind(this);
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
	
	updateVolume(v) {
		this.setState({
			volume : v
		});
	}
	
	render() {
		return (
			<div className="App">
				<Options 
					volume={this.state.volume}
					padToSounds={this.state.padToSounds}
					soundEffects={this.state.soundEffects}
					updateVolume={this.updateVolume}
				/>
				<Display
					padToSounds={this.state.padToSounds}
					soundEffects={this.state.soundEffects}
				/>
				<Drumpad
					volume={this.state.volume}
					soundEffects={this.state.soundEffects}
					padToSounds={this.state.padToSounds} 
				/>
			</div>
		);
	}	
}

export default App;
