import React from 'react';

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			volume : 0,
			power : false
		};
		this.handleChangeVolume = this.handleChangeVolume.bind(this);
		this.handleClickEdit = this.handleClickEdit.bind(this);
		this.handleClickPower = this.handleClickPower.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			volume : this.props.volume,
			power : this.props.power
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
	
	handleClickEdit() {
		this.props.toggleEdit();
	}
	
	handleClickPower() {
		this.props.togglePower();
	}
	
	render() {
		/*Create the power off style*/
		let powerStyle = {};
		let powerSliderClass = "volume-slider ";
		let disabled = "";
		if(!this.props.power) {
			powerStyle = {
				color : "#7a2100",
				pointerEvents : "none",
				borderColor : "#7a2100"
			};
			disabled="disabled";
			powerSliderClass += "volume-slider-off";
		}
		
		return(
			<div className="Options">
				<div 
					className="onoff"
					onClick={this.handleClickPower}
					>
					<i
						className="fa fa-power-off font-button"
					/>
				</div>
				
				<div 
					className="edit"
					onClick={this.handleClickEdit}
					disabled={disabled}
					style={powerStyle}
					>
					<i 
						className="fa fa-cog font-button"
						style={powerStyle}
					/>
				</div>
				
				<div className="volume">
					<input
						className={powerSliderClass}
						style={powerStyle}
						type="range"
						min="1" 
						max="100" 
						id="volume"
						onChange={this.handleChangeVolume}
						disabled={disabled}
					/>
				</div>
			</div>
		);
	}
}

export default Options;