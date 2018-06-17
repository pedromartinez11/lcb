import React, {Component} from 'react';
import './card.css';

import Cell from '../Cell/Cell';

class Card extends Component {
  render () {
    return (
      <div className="lcb-card">
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />

        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />

        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />

        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />
        <Cell cardNumber={1} />

      </div>
    );
  }
}

export default Card;
