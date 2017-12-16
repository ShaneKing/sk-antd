import {SK} from 'sk-js';
import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH4 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.h4
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKH4';
  }
}
