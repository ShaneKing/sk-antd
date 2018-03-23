import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKH5 extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.h5,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKH5';
  }
}
