import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH4 extends Comp {
  static SK_COMP_NAME = 'SKH4';
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h4,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH4.SK_COMP_NAME;
  }
}
