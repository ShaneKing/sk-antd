import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH4 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h4,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKH4';
  }
}
