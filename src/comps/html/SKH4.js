import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKH4 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h4
  };

  constructor(...args) {
    super(...args);
  }
}
