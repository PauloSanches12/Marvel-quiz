import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBase } from './styles';

const Button = ({ type, children }) => {
  return (
      <ButtonBase type={type} children={children} />
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
