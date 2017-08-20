import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH4 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h4
  };

  constructor(...args) {
    super(...args);
  }
}
