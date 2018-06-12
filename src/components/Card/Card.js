import React, { Component } from 'react';
import './card.css';

import Cell from '../Cell/Cell';


class Card extends Component {
  render() {
    return (
      <div className="lcb-card">
		  <p>i am card</p>
		  <Cell />
		  <Cell />
		  <Cell />
		  <Cell />

		  <Cell />
		  <Cell />
		  <Cell />
		  <Cell />

		  <Cell />
		  <Cell />
		  <Cell />
		  <Cell />

		  <Cell />
		  <Cell />
		  <Cell />
		  <Cell />
		  <p>card footer</p>
       </div>
    );
  }
}

export default Card;
