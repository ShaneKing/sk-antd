import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKAside extends Comp {
  static SK_COMP_NAME = 'SKAside';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.aside,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKAside.SK_COMP_NAME;
  }
}
