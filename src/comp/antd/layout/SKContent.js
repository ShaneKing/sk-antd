import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKContent extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Layout.Content
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKContent';
  }
}
