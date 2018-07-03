import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import random from 'lodash/random';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCell} from '../../store/actions/configActions';
import {PropTypes} from 'prop-types';
import {NUM_CARDS} from '../../constants';

const propTypes = {
  selectCell: PropTypes.func.isRequired,
};

class RandomButtonComponent extends Component {
  static propTypes = propTypes;

  getBlankCellId = () => {
    const selectionsPairs = Object.entries (this.props.config.selections);
    const blankCell = selectionsPairs.find (([cellId, value]) => {
      return value === undefined || value === null;
    });

    if (blankCell) {
      return blankCell[0];
    }

    return undefined;
  };

  getRandomCell = () => {
    return this.getBlankCellId () || random (0, NUM_CARDS);
  };

  onClick = ev => {
    const cellId = this.getRandomCell (); // random (0, NUM_CARDS);
    const value = random (1, 52);
    this.props.selectCell (cellId, value);
  };
  render () {
    return (
      <Button variant="raised" color="primary" onClick={this.onClick}>
        Random Selection
      </Button>
    );
  }
}
const mapStateToProps = state => {
  return {
    config: state.config,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      selectCell,
    },
    dispatch
  );
RandomButtonComponent = connect (mapStateToProps, mapDispatchToProps) (
  RandomButtonComponent
);

export default RandomButtonComponent;
