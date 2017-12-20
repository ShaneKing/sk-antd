import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKBr extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.br
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKBr';
  }
}
