import { Layout } from 'antd/lib/index';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

const {Header} = Layout;

Header.defaultProps = SK.extends(true, {}, {}, OriginLayout.defaultProps, Header.defaultProps, {});
Header.propTypes = SK.extends(true, {}, {}, OriginLayout.propTypes, Header.propTypes, {});

Header.NON_SK_COMP_NAME = 'Header';

export default class SKHeader extends AntdComp {
  static SK_COMP_NAME = 'SKHeader';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Header.defaultProps, {
    compTag: Header,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Header.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKHeader.SK_COMP_NAME;
  }
}
