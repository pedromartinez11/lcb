import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './cell.css';

class Cell extends Component {
  static propTypes = {
    cellId: PropTypes.number.isRequired,
    selection: PropTypes.number,
  };

  static defaultProps = {};

  render () {
    const {selection} = this.props;

    return (
      <div className="lcb-cell">
        {selection}
      </div>
    );
  }
}

export default Cell;
