import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKAside extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.aside
  };

  constructor(...args) {
    super(...args);
  }
}
