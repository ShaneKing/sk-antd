import Comp from '../../util/Comp';
import REACT from '../../util/REACT';

export default class SKBr extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.br
  };

  constructor(...args) {
    super(...args);
  }
}
