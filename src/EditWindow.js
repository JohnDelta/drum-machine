import React from 'react';

class EditWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSounds : []
		};
		this.handleClickSave = this.handleClickSave.bind(this);
		this.handleChangePadToSound = this.handleChangePadToSound.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			padToSounds : this.props.padToSounds
		});
	}
	
	handleClickSave(e) {console.log("save");
		let padIndex = e.target.id;
		let pad = this.state.padToSounds[padIndex];
		this.props.updatePadToSounds(padIndex,pad.idSound);
	}
	
	/*
		Replace the sound id assigned to the specific pad and update local state.
		Carefully take copies of the json states because if you don't,
		they can effect the global state too.
	*/
	handleChangePadToSound(e) {
		let padId = e.target.id;
		let idSound = e.target.value;
		let pad;
		let padIndex;
		
		this.state.padToSounds.forEach((padItem,index) => {
			if(padItem.keyTrigger === padId) {
				pad = {
					keyTrigger : padItem.keyTrigger,
					keyCode : padItem.keyCode,
					idSound : padItem.idSound
				};
				padIndex = index;
			}
		});
		
		pad.idSound = idSound;
		let newPadToSounds = this.state.padToSounds.slice();
		newPadToSounds[padIndex] = pad;
		
		this.setState({
			padToSounds : newPadToSounds
		});
	}
	
	render() {
		/*
			For every key pad, display the sound effects as a list,
			and make default the assigned one to it. The user
			has the ability to assign new sound effects to each pad.
		*/
		let data = [];
		if(this.props.power && this.props.edit) {
			
			let sounds = this.props.soundEffects
				.map(soundItem => 
					<option
						key={soundItem.idSound}
						value={soundItem.idSound}
					>
						{soundItem.idSound}
					</option>);
			
			this.state.padToSounds.forEach((padItem,index) => {
				let defaultSound = this.props.soundEffects
					.filter(soundItem => soundItem.idSound === padItem.idSound)[0];
						
				data.push(
					<div className="pad-to-sound" key={padItem.keyTrigger+index}>
						<p>{padItem.keyTrigger}</p>
						<select
							id={padItem.keyTrigger}
							value={defaultSound.idSound}
							onChange={this.handleChangePadToSound}
							title="select new sound for this pad"
						>
							{sounds}
						</select>
						<i 
							className="fa fa-save" 
							title="save change"
							id={index}
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