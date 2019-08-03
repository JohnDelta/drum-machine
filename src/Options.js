import React from 'react';

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSounds : [],
			soundEffects  :[],
			volume : 0
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			padToSounds : this.props.padToSounds,
			soundEffects : this.props.soundEffects,
			volume : this.props.volume
		});
	}
	
	componentDidMount() {
		let volumeSlider = document.getElementById("volume");
		volumeSlider.value = this.state.volume;
	}
	
	handleChange(e) {
		this.setState({
			volume : e.target.value
		});
		this.props.updateVolume(this.state.volume);
	}
	
	render() {
		return(
			<div className="Options">
			
				<div className="onoff">
					<i className="fa fa-power-off font-button"></i>
				</div>
				
				<div className="edit">
					<i className="fa fa-cog font-button"></i>
				</div>
				
				<div className="volume">
					<input
						className="volume-slider"
						type="range"
						min="1" 
						max="100" 
						id="volume"
						onChange={this.handleChange}
					/>
				</div>
				
				
			</div>
		);
	}
}

export default Options;