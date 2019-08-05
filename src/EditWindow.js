import React from 'react';

class EditWindow extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickSave = this.handleClickSave.bind(this);
	}
	
	handleClickSave(e) {
		console.log(e);
	}
	
	render() {
		/*
			For every key pad, display the sound effects as a list,
			and make default the assigned one to it. The user
			has the ability to assign new sound effects to each pad.
			
			Q => 1,2,3,4,5 def
			
		*/
		let data = [];
		if(this.props.power && this.props.edit) {
			this.props.padToSounds.forEach((padItem,index) => {
				let defaultSound = this.props.soundEffects
					.filter(soundItem => soundItem.idSound === padItem.idSound);
				let sounds = this.props.soundEffects
					.map(soundItem => 
						<option
							value={soundItem.idSound}
							>{soundItem.idSound}
						</option>);
				data.push(
					<div className="pad-to-sound" key={index}>
						<p>{padItem.keyTrigger}</p>
						<select
							name={padItem.keyTrigger}
							value={defaultSound.idSound}
							title="select new sound for this pad"
						>{sounds}</select>
						<i 
							className="fa fa-save" 
							title="save change"
							onClick={this.handleClickSave}
						/>
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