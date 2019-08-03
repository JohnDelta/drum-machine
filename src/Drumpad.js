import React from 'react';

class Drumpad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSounds : [],
			soundEffects : [],
			volume : 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			padToSounds : this.props.padToSounds,
			soundEffects : this.props.soundEffects,
			volume : this.props.volume
		});
	}
	
	handleClick(e) {
		let padToSound = this.state.padToSounds
				.filter((item) => item.keyTrigger === e.target.id)[0];
		let soundEffect = this.state.soundEffects
				.filter((item) => padToSound.idSound === item.idSound)[0];
		let audio = new Audio(soundEffect.url);
		audio.volume = this.state.volume * 1/100;
		audio.play();
	}
	
	render() {
		let pads = []; 
		this.props.padToSounds.forEach((padToSound,index) => {
			pads.push(
				<button
					className="drum-pad"
					key={index} 
					id={padToSound.keyTrigger} 
					dangerouslySetInnerHTML={{__html : padToSound.keyTrigger}}
					onClick={this.handleClick}
				/>
			);
		});
		
		return(
			<div className="Drumpad">
				{pads}
			</div>
		);
	}
}

export default Drumpad;