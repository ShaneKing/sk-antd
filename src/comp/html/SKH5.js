import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH5 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h5
  };

  constructor(...args) {
    super(...args);
  }
}
