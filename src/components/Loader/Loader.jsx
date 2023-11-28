import React from 'react';
import { FallingLines } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => (
  <div className={css.overlay}>
    <FallingLines
      className={css.loader}
      color="#4fa94d"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  </div>
);

export default Loader;
