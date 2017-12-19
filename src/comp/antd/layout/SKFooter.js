import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKFooter extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Layout.Footer
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKFooter';
  }
}
