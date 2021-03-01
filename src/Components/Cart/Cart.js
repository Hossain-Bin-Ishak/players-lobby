import React from 'react';

const Cart = (props) => {
    
    const cart = props.cart;
    //console.log(cart);
      const totalAuctionValue = cart.reduce((sum, player) => sum + player.auction, 0)
    
    return (
        <div>
           <h2>Total Auction Values: ${totalAuctionValue}</h2>
        </div>
    );
};

export default Cart;