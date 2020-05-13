import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ isPrimary, isDanger, isSuccess }) => (
  <button
    className={cn('button', {
      'is-primary': isPrimary,
      'is-danger': isDanger,
      'is-success': isSuccess,
    })}
  />
);

Button.propTypes = {
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSuccess: PropTypes.bool,
};

Button.defaultProps = {
  isPrimary: false,
  isDanger: false,
  isSuccess: false,
};

export default Button;
