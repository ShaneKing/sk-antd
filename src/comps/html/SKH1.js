import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKH1 extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.h1
  };

  constructor(...args) {
    super(...args);
  }
}
