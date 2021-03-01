import React from 'react';
import ShowPlayer from '../ShowPlayer/ShowPlayer';
import './Cart.css';

const Cart = (props) => {
  console.log(props.cart);
  const cart = props.cart;

  //console.log(showPlayer);
  const totalAuctionValue = cart.reduce((sum, player) => sum + player.auction, 0)
  return (
    <div>
      <h2>Total Auction Values: ${totalAuctionValue}</h2>

      {
        cart.map(singlePlayer => <ShowPlayer player={singlePlayer}></ShowPlayer>)
      }

    </div>
  );
};

export default Cart;