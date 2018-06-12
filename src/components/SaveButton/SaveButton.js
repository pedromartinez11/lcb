import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class SaveButton extends Component {
	onClick = (ev) => {
		window.alert('save!');
	}
  render() {
    return (
				<Button variant="raised" color="primary" onClick={this.onClick} >
					Save
				</Button>
    );
  }
}

export default SaveButton;
