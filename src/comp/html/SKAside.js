import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKAside extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.aside
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKAside';
  }
}
