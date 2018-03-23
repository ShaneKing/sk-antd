import { Layout } from 'antd';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

Layout.Footer.defaultProps = SK.assign({}, {}, OriginLayout.defaultProps, Layout.Footer.defaultProps, {});
Layout.Footer.propTypes = SK.assign({}, {}, OriginLayout.propTypes, Layout.Footer.propTypes, {});

export default class SKFooter extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.Footer.defaultProps, {
    compTag: Layout.Footer,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.Footer.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKFooter';
  }
}
