import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKH1 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.h1
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKH1';
  }
}
