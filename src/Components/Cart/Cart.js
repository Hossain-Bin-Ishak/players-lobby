import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    let showPlayer = [];
    for (let i = 0; i < cart.length; i++) {
      const player = cart[i];
      showPlayer = player;
 
    }
    console.log(showPlayer);
    const totalAuctionValue = cart.reduce((sum, player) => sum + player.auction, 0)
    return (
        <div>
           <h2>Total Auction Values: ${totalAuctionValue}</h2>
        </div>
    );
};

export default Cart;