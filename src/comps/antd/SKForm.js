import {Form} from 'antd';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKForm extends Comp {
  static defaultProps = {
    compTag: Form
  };
  static propTypes = SK.assign({}, Comp.propTypes, Form.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
