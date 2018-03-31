import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKSpan extends Comp {
  static SK_COMP_NAME = 'SKSpan';
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.span,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKSpan';
  }
}
