import React from 'react';
import {connect} from 'react-redux';

const NUM_CARDS = 16;

class CardContainerComponent extends React.Component {
  render () {
		console.log('CardContainerComponent props: ', this.props);
		const { config: {selections = {}} } = this.props;
		const selectionEls = [...Array(NUM_CARDS).keys()].map(i => {
			const val = selections[i];
			if (val === null || val === undefined) {
				return null;
			}
			return <p key={i}>{i} = {val}</p>
		})
    return <div>
			{selectionEls}
		</div>
  }
}

const mapStateToProps = state => {
  const result = {};
  result.config = state.config;
  return result;
};

const mapDispatchToProps = undefined;

const CardContainer = connect (mapStateToProps, mapDispatchToProps) (
  CardContainerComponent
);

export default CardContainer;
