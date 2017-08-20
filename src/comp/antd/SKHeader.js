import {Layout} from 'antd';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKHeader extends Comp {
  static defaultProps = {
    compTag: Layout.Header
  };
  static propTypes = SK.assign({}, Comp.propTypes, Layout.Header.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
