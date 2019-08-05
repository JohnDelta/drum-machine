import React from 'react';

class EditWindow extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		/*
			For every key pad, display the sound effects as a list,
			and make default the assigned one to it. The user
			has the ability to assign new sound effects to each pad.
			
			Q => 1,2,3,4,5 def
			
		*/
		let data = [];
		if(this.props.power) {
			this.props.padToSounds.forEach((padItem,index) => {
				let sounds = this.props.soundEffects
					.map(item => <option>{item.idSound}</option>);
				data.push(
					<div className="pad-to-sound">
						<p>{padItem.keyTrigger}</p>
						<select>{sounds}</select>
					</div>
				);
			});
		}
		
		return(
			<div className="EditWindow">
				{data}
			</div>
		);
	}
}

export default EditWindow;