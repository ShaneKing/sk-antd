import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKH2 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h2
  };

  constructor(...args) {
    super(...args);
  }
}
