import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './cell.css';

class Cell extends Component {
  static propTypes = {
    cardNumber: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  render () {
    const {cardNumber} = this.props;

    return (
      <div className="lcb-cell">
        cell (# {cardNumber})
      </div>
    );
  }
}

export default Cell;
