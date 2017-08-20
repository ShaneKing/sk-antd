import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKP extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.p
  };

  constructor(...args) {
    super(...args);
  }
}
