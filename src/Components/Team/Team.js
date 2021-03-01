import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Players from '../Players/Players';
import Cart from '../Cart/Cart'

import './Team.css';

const Team = () => {

    const team = fakeData;
    const [players, setPlayers] = useState(team);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch({team})
        .then(res => res.json())
        .then(data => setPlayers(data))
        .catch(error => console.log(error))
      },[])
    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
      };
     
    return (
        <div className='team-container'>
            <div className='players-state'>
            <h2>Total Number of Players: {players.length}</h2>
            <h2>Number of Players Picked: {cart.length}</h2>
            <Cart cart={cart}></Cart>
             
            </div>
            <div className="players-container">
                {
                    players.map(player => <Players player={player} handleFunction={handleAddPlayer} key={player.id}></Players>)
                }
            </div>
            
        </div>
    );
};

export default Team;