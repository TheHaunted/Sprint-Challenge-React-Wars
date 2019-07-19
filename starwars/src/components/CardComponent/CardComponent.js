import React from 'react';
import {Card} from 'semantic-ui-react';

function CharacterCard(props){
    return(
        <Card>
            <img src={props.url} />
            <h3 className="name">{props.name}</h3>
        </Card>
    )
}

export default CharacterCard;