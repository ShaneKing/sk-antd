import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKH3 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h3
  };

  constructor(...args) {
    super(...args);
  }
}
