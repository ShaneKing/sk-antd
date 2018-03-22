import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKCanvas extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.canvas
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKCanvas';
  }
}
