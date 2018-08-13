import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

const {Header} = Layout;

Header.defaultProps = SK.extend(true, {}, {}, OriginLayout.defaultProps, Header.defaultProps, {});
Header.propTypes = SK.extend(true, {}, {}, OriginLayout.propTypes, Header.propTypes, {});

Header.NON_SK_COMP_NAME = 'Header';

export default class SKHeader extends AntdComp {
  static SK_COMP_NAME = 'SKHeader';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Header.defaultProps, {
    compTag: Header,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Header.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKHeader.SK_COMP_NAME;
  }
}
