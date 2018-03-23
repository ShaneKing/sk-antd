import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKDiv extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.div,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKDiv';
  }
}
