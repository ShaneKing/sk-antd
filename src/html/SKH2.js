import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH2 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h2,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKH2';
  }
}
