import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH3 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h3,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKH3';
  }
}
