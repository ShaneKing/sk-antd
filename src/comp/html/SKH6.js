import {SK} from 'sk-js';
import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH6 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.h6
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKH6';
  }
}
