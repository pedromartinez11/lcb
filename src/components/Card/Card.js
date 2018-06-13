import React, {Component} from 'react';
import './card.css';

import Cell from '../Cell/Cell';

class Card extends Component {
  render () {
    return (
      <div className="lcb-card">
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
      </div>
    );
  }
}

export default Card;
