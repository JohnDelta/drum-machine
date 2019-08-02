import React from 'react';
import Pad from './Pad.js';

class Drumpad extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		
		let pads = [];
		for(var i = 0; i < 9; i++) {
			pads.push(<Pad value={i} />);
		}
		
		return(
			<div className="Drumpad">
				{pads}
			</div>
		);
	}
}

export default Drumpad;