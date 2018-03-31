import { Form } from 'antd';
import { SK } from 'sk-js';
import OriginForm from './OriginForm';
import AntdComp from '../AntdComp';

//origin exist, use origin
export default class SKForm extends AntdComp {
  static SK_COMP_NAME = 'SKForm';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, OriginForm.defaultProps, {
    compTag: Form,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, OriginForm.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKForm.SK_COMP_NAME;
  }
}
