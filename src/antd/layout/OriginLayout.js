import { Layout } from 'antd';
import { SK } from 'sk-js';
import CommonLayout from './CommonLayout';

Layout.defaultProps = SK.assign({}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
Layout.propTypes = SK.assign({}, CommonLayout.propTypes, Layout.propTypes, {});

export default class OriginLayout {
  static defaultProps = SK.assign({}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
  static propTypes = SK.assign({}, CommonLayout.propTypes, Layout.propTypes, {});
}
