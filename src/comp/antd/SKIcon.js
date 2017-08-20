import {Icon} from 'antd';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKIcon extends Comp {
  static defaultProps = {
    compTag: Icon
  };
  static propTypes = SK.assign({}, Comp.propTypes, Icon.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
