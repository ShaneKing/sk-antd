import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKBr extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.br,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKBr';
  }
}
