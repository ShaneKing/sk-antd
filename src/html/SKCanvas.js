import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKCanvas extends Comp {
  static SK_COMP_NAME = 'SKCanvas';
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.canvas,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCanvas.SK_COMP_NAME;
  }
}
