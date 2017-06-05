import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKH5 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h5
  };

  constructor(...args) {
    super(...args);
  }
}
