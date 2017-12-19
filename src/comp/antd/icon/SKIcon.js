import {Icon} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKIcon extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Icon
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKIcon';
  }
}
