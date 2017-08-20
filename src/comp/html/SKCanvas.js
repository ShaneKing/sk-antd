import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKCanvas extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.canvas
  };

  constructor(...args) {
    super(...args);
  }
}
