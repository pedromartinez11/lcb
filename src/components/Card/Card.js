import React, {Component} from 'react';
import range from 'lodash/range';
import './card.css';

import {NUM_CARDS} from '../../constants';
import CellContainer from '../../containers/CellContainer';

class Card extends Component {
  getCellContainers = () => {
    return range (NUM_CARDS).map (i => {
      return <CellContainer key={i} cellId={i} />;
    });
  };
  render () {
    return (
      <div className="lcb-card">
        {this.getCellContainers ()}
      </div>
    );
  }
}

export default Card;
