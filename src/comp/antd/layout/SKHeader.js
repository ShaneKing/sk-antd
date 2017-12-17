import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

Layout.Header.defaultProps = SK.assign({}, {}, OriginLayout.defaultProps, Layout.Header.defaultProps, {});
Layout.Header.propTypes = SK.assign({}, {}, OriginLayout.propTypes, Layout.Header.propTypes, {});

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
