import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Layout.Header.defaultProps = SK.assign({}, {}, Layout.defaultProps, Layout.Header.defaultProps, {});
Layout.Header.propTypes = SK.assign({}, {}, Layout.propTypes, Layout.Header.propTypes, {});

export default class SKHeader extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.Header.defaultProps, {
    compTag: Layout.Header
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.Header.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKHeader';
  }
}
