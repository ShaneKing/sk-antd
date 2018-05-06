import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKDiv extends Comp {
  static SK_COMP_NAME = 'SKDiv';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.div,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKDiv.SK_COMP_NAME;
  }
}
