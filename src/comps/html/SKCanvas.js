import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKCanvas extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.canvas
  };

  constructor(...args) {
    super(...args);
  }
}
