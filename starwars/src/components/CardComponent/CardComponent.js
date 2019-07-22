import React from 'react';
import {Card} from 'semantic-ui-react';

function CharacterCard(props){
    return(
        <Card>
            <h3 className="name">{props.name}</h3>
            <Card.Description>
                <p>Gender: {props.gender}</p>
                <p>Eye color: {props.eyes}</p>
            </Card.Description>
        </Card>
    )
}

export default CharacterCard;