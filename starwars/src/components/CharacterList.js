import React from 'react';
import Character from './Character';

// class CharacterList extends Component{
//     constructor(props) {
//         super(props);
        
//     }

//     render(){
//         console.log(this.props)
//         return(

//             <div>
//                 {this.props.allCharacters.map(character =>{
//                     <Character name={character.name}  />
//                 })}
//             </div>
//         )
//     }
// }
    

const CharacterList = props => {
    // console.log(props)
    return <ul>{props.allCharacters.map(c => <Character name={c} key={c.name} />)}</ul>;
}

export default CharacterList;