import {Button} from 'antd';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKButton extends Comp {
  static defaultProps = {
    compTag: Button
  };
  static propTypes = SK.assign({}, Comp.propTypes, Button.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
