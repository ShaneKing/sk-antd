import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKDiv extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.div
  };

  constructor(...args) {
    super(...args);
  }
}
