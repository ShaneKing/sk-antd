import { Layout } from 'antd';
import { SK } from 'sk-js';
import CommonLayout from './CommonLayout';

export default class OriginLayout {
  static defaultProps = SK.assign({}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
  static propTypes = SK.assign({}, CommonLayout.propTypes, Layout.propTypes, {});
}
