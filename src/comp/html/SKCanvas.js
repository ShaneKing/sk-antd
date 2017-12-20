import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKCanvas extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.canvas
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKCanvas';
  }
}
