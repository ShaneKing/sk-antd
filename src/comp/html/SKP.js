import {SK} from 'sk-js';
import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKP extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.p
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKP';
  }
}
