import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKSpan extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.span
  };

  constructor(...args) {
    super(...args);
  }
}
