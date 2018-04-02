import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH1 extends Comp {
  static SK_COMP_NAME = 'SKH1';
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h1,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH1.SK_COMP_NAME;
  }
}