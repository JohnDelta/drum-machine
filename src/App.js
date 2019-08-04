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
			// Power button of the device
			power : false,
			// Sound volume
			volume : 10,
			// The message which the display will show
			display : "",
			// If it's true, the display will show the settings
			edit : false,
			// JSON which contains the keyId,soundId and keyCode to initialize pad
			padToSounds : getDefaultPadToSounds(),
			// JSON which contains the soundId,url to play the sound
			soundEffects : getDefaultSoundEffects()
		};
		this.togglePower = this.togglePower.bind(this);
		this.updateVolume = this.updateVolume.bind(this);
		this.updateDisplay = this.updateDisplay.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
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
	
	updateDisplay(d) {
		this.setState({
			display : "Sound : "+d
		});
	}
	
	updateVolume(v) {
		//And update display simutaneously while you are here...
		this.setState({
			volume : v,
			display : "Volume : "+v
		});
	}
	
	toggleEdit() {
		let res;
		if(this.state.edit)
			res = false;
		else 
			res = true;
		this.setState({
			edit : res
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
					updateDisplay={this.updateDisplay}
					toggleEdit={this.toggleEdit}
				/>
				<Display
					edit={this.state.edit}
					display={this.state.display}
					padToSounds={this.state.padToSounds}
					soundEffects={this.state.soundEffects}
				/>
				<Drumpad
					volume={this.state.volume}
					soundEffects={this.state.soundEffects}
					padToSounds={this.state.padToSounds}
					updateDisplay={this.updateDisplay}
				/>
			</div>
		);
	}	
}

export default App;
