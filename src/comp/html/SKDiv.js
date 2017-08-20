import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKDiv extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.div
  };

  constructor(...args) {
    super(...args);
  }
}
