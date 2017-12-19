import {Form} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

//origin exist, use origin
export default class SKForm extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Form
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKForm';
  }
}
