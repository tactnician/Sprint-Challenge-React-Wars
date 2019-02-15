import React, { Component } from "react";
// import CharacterProps from './CharacterProps';

class Character extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		console.log(this.props);
		return (
            <div>Tester</div>
			// <div>
			// 	 {/* {this.props.name},{/* {this.props.city.state},
			// 	{this.state.zips.map(zip => (
			// 		<Zip zipCode={zip} key={zip} /> */}
			// 	))} */}
			// </div>
		)
	}
}

export default Character;