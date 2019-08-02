import React from 'react';
import Pad from './Pad.js';

class Drumpad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSound : [],
			sounds : []
		};
	}
	
	componentWillMount() {
		this.setState({
			padToSound : this.props.padToSound,
			sounds : this.props.sounds
		});
	}
	
	render() {
		let pads = []; 
		this.props.padToSound.forEach((item,index) => {
			pads.push(<Pad pad={item} sound={this.state.sounds[index]} />);
		});
		
		return(
			<div className="Drumpad">
				{pads}
			</div>
		);
	}
}

export default Drumpad;