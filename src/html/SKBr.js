import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKBr extends Comp {
  static SK_COMP_NAME = 'SKBr';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.br,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBr.SK_COMP_NAME;
  }
}
