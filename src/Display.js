import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit : false,
			display : ""
		};
	}
	
	componentWillMount() {
		this.setState({
			display : this.props.display,
			edit : this.props.edit
		});
	}
	
	componentDidUpdate() {
		if(this.state.display !== this.props.display) {
			this.setState({
				display : this.props.display
			});
		}
		if(this.state.edit !== this.props.edit) {
			this.setState({
				edit : this.props.edit
			});
		}
	}
	
	render() {
		if(!this.state.edit) {
			return(
				<div 
					className="Display" 
					id="display"
				>
					<div 
						className="display-text"
						dangerouslySetInnerHTML={{__html:this.state.display}}
					/>
				</div>
			);
		} else {
			return (
				<div 
					className="DisplayEdit" 
					id="display"
				>
				
					
				
				</div>
			);
		}
	}
}

export default Display;