// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {RaisedButton} from "material-ui";


class CounterButton extends PureComponent {
// eslint-disable-next-line no-undef
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    onClick:  PropTypes.func
  };

  render() {
    const { name, color} = this.props;
    return (
      <RaisedButton primary={true} onClick={this.handleClick} label={name}/>
    );
  }

// eslint-disable-next-line no-undef
  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  }
}

export default CounterButton;
