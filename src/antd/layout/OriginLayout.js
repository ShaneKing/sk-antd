import {Layout} from 'antd';
import {SK} from 'sk-js';
import CommonLayout from './CommonLayout';

Layout.defaultProps = SK.extend(true, {}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
Layout.propTypes = SK.extend(true, {}, CommonLayout.propTypes, Layout.propTypes, {});

Layout.NON_SK_COMP_NAME = 'Layout';

export default class OriginLayout {
  static defaultProps = SK.extend(true, {}, {}, CommonLayout.defaultProps, Layout.defaultProps, {});
  static propTypes = SK.extend(true, {}, CommonLayout.propTypes, Layout.propTypes, {});
}
