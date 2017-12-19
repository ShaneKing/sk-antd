import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKDiv extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.div
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKDiv';
  }
}
