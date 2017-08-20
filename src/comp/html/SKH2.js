import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH2 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h2
  };

  constructor(...args) {
    super(...args);
  }
}
