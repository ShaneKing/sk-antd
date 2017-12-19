import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKH5 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.h5
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKH5';
  }
}
