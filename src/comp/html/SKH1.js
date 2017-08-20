import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKH1 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h1
  };

  constructor(...args) {
    super(...args);
  }
}
