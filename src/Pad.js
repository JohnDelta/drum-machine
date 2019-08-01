import React from 'react';

class Pad extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="Pad">
				<button className="drum-pad">
					{this.props.value}
				</button>
			</div>
		);
	}
}

export default Pad;