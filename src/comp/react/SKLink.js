import React from 'react';
import {Link} from 'react-router-dom';
import {SK} from 'sk-js';
import Comp from '../Comp';

export default class SKLink extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, Link.defaultProps, {
    compTag: Link
  });
  static propTypes = SK.assign({}, Comp.propTypes, Link.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKLink';
  }
}
