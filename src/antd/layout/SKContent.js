import { Layout } from 'antd';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

Layout.Content.defaultProps = SK.assign({}, {}, OriginLayout.defaultProps, Layout.Content.defaultProps, {});
Layout.Content.propTypes = SK.assign({}, {}, OriginLayout.propTypes, Layout.Content.propTypes, {});

export default class SKContent extends AntdComp {
  static SK_COMP_NAME = 'SKContent';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.Content.defaultProps, {
    compTag: Layout.Content,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.Content.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKContent';
  }
}
