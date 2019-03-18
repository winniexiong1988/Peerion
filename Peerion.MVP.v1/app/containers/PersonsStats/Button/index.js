/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import NormalButton from './NormalButton';
import ActiveButton from './ActiveButton';
import Wrapper from './Wrapper';
function Button(props) {
  // Render an anchor tag
  const A = props.activated ? ActiveButton : NormalButton;

  return (
    <Wrapper>
      <A href={props.href} onClick={props.onClick}>
        {Children.toArray(props.children)}
      </A>
    </Wrapper>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  activated: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
