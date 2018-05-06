import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH6 extends Comp {
  static SK_COMP_NAME = 'SKH6';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.h6,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH6.SK_COMP_NAME;
  }
}
