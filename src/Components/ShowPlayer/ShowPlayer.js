import React from 'react';
import './ShowPlayer.css';

const ShowPlayer = (props) => {
    let player = props.player;
    for (let i = 0; i < props.player.length; i++) {
        const element = props.player[i];
        player = element;

    }
    return (
        <div className='single-player'>
            <img src={player.image} alt="" />
            <h5>Player Name: {player.name}</h5>
            <h5>Auction Value: {player.auction}</h5>
        </div>
    );
};

export default ShowPlayer;