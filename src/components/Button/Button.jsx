import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ onNextPage }) => (
  <div className={css.ButtonContainer}>
    <button type="button" className={css.Button} onClick={onNextPage}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onNextPage: PropTypes.func,
};

export default Button;
