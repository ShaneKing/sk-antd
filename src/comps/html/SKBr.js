import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKBr extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.br
  };

  constructor(...args) {
    super(...args);
  }
}
