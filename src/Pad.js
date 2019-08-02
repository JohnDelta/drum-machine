import React from 'react';

class Pad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pad : "",
			sound : ""
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			pad : this.props.pad,
			sound : this.props.sound
		});
	}
	
	handleClick(e) {
		var audio = document.getElementById(e.target.id+"audio");
		audio.play();
	}
	
	render() {
		return(
			<div className="Pad">
				<button
					id={this.state.pad.keyTrigger}
					onClick={this.handleClick}
					className="drum-pad"
					dangerouslySetInnerHTML={{__html : this.state.pad.keyTrigger}}
				/>
				<audio
					id={this.state.pad.keyTrigger+"audio"}
					src={this.state.sound.url}
				/>
			</div>
		);
	}
}

export default Pad;