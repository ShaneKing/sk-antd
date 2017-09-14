import React from 'react';
import {Link} from 'react-router-dom';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKLink extends Comp {
  static defaultProps = {
    compTag: Link
  };
  static propTypes = SK.assign({}, Comp.propTypes, Link.propTypes, {
  });

  constructor(...args) {
    super(...args);
  }
}
