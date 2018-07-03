import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Cell from '../components/Cell/Cell';

const propTypes = {
  cellId: PropTypes.number.isRequired,
};

class CellContainerComponent extends React.Component {
  static propTypes = propTypes;

  render () {
    const selection = this.props.selection;
    return <Cell cellId={this.props.cellId} selection={selection} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const cellId = ownProps.cellId;
  const config = state.config || {};
  const selections = config.selections || {};
  const selection = selections[cellId];

  return {
    selection,
  };
};

const mapDispatchToProps = undefined;

const CellContainer = connect (mapStateToProps, mapDispatchToProps) (
  CellContainerComponent
);

export default CellContainer;
