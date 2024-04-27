import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonComponent } from './styles';

const Button = ({
  text,
  buttonType,
  buttonShape,
  buttonSize,
  icon,
  ...otherProps
}) => {
  return (
    <ButtonComponent
      {...otherProps}
      buttonType={buttonType}
      buttonShape={buttonShape}
      buttonSize={buttonSize}
      hasText={text.length > 0}
    >
      {icon && <i className={`fa fa-${icon}`}></i>}
      {text}
    </ButtonComponent>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  buttonType: PropTypes.oneOf([
    'default',
    'primary',
    'ghost',
    'basic',
    'danger',
    'success',
  ]),
  buttonShape: PropTypes.oneOf(['rounded', 'square']),
  buttonSize: PropTypes.oneOf(['default', 'small']),
  icon: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  buttonType: 'default',
  buttonShape: 'square',
  buttonSize: 'default',
  icon: null,
};

export default Button;
