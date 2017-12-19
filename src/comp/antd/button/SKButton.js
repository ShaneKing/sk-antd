import {Button} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKButton extends AntdComp {

  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Button
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKButton';
  }
}
