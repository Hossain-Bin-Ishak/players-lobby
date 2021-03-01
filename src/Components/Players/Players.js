import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './Players.css';

const Players = (props) => {
    const { image, name, age, country, auction } = props.player;
    const handleAddPlayer = props.handleFunction;
    function showPlayer() {

    }
    return (
        <div className='players-info'>
            <img src={image} alt="image" />
            <h4>Name: {name}</h4>
            <p><b>Age:</b> {age}</p>
            <p><small><b>Country:</b> {country}</small></p>
            <p><small><b>Auction Value:</b> {auction}</small></p>
            <Button variant='primary'
                onClick={() => {
                    handleAddPlayer(props.player)
                    showPlayer()


                }} className='addBtn'><FontAwesomeIcon icon={faClipboardCheck} /> Pick Player</Button>
        </div>

    );
};

export default Players;