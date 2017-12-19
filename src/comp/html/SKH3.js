import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKH3 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.h3
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKH3';
  }
}
