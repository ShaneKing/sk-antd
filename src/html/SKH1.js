import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH1 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h1
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKH1';
  }
}
