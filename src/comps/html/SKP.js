import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKP extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.p
  };

  constructor(...args) {
    super(...args);
  }
}
