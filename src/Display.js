import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div 
				className="Display" 
				id="display"
				dangerouslySetInnerHTML={{__html:"hello"}}
			/>
		);
	}
}

export default Display;