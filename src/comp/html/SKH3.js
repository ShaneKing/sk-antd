import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH3 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h3
  };

  constructor(...args) {
    super(...args);
  }
}
