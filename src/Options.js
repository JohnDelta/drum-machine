import React from 'react';

class Options extends React.Component {
	constructor(props) {
		super(props);
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
					/>
				</div>
				
				
			</div>
		);
	}
}

export default Options;