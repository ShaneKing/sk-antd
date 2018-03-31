import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKP extends Comp {
  static SK_COMP_NAME = 'SKP';
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.p,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKP';
  }
}
