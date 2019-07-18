import { Layout } from 'antd/lib/index';
import { SK } from 'sk-js';
import CommonLayout from './CommonLayout';

Layout.defaultProps = SK.extends(true, {}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
Layout.propTypes = SK.extends(true, {}, CommonLayout.propTypes, Layout.propTypes, {});

Layout.NON_SK_COMP_NAME = 'Layout';

export default class OriginLayout {
  static defaultProps = SK.extends(true, {}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
  static propTypes = SK.extends(true, {}, CommonLayout.propTypes, Layout.propTypes, {});
}
