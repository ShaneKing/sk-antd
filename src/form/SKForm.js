import { Form } from 'antd';
import { SK } from 'sk-js';
import OriginForm from './OriginForm';
import AntdComp from '../AntdComp';

//origin exist, use origin
export default class SKForm extends AntdComp {
  static SK_COMP_NAME = 'SKForm';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, OriginForm.defaultProps, {
    compTag: Form,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, OriginForm.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKForm.SK_COMP_NAME;
  }
}
