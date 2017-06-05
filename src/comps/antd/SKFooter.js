import {Layout} from 'antd';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKHeader extends Comp {
  static defaultProps = {
    compTag: Layout.Footer
  };
  static propTypes = SK.assign({}, Comp.propTypes, Layout.Footer.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
