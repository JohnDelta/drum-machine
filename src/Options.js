import React from 'react';

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSounds : [],
			soundEffects  :[],
			volume : 0
		};
		this.handleChangeVolume = this.handleChangeVolume.bind(this);
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
	
	componentDidUpdate() {
		if(this.state.volume !== this.props.volume) {
			this.props.updateVolume(this.state.volume);
		}
	}
	
	handleChangeVolume(e) {
		this.setState({
			volume : e.target.value
		});
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
						onChange={this.handleChangeVolume}
					/>
				</div>
				
				
			</div>
		);
	}
}

export default Options;