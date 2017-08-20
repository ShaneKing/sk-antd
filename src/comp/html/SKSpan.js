import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKSpan extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.span
  };

  constructor(...args) {
    super(...args);
  }
}
