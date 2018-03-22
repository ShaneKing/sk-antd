import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKAside extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.aside
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKAside';
  }
}
