import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKAside extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.aside
  };

  constructor(...args) {
    super(...args);
  }
}
