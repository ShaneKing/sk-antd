import { Layout } from 'antd';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

const {Footer} = Layout;

Footer.defaultProps = SK.extends(true, {}, {}, OriginLayout.defaultProps, Footer.defaultProps, {});
Footer.propTypes = SK.extends(true, {}, {}, OriginLayout.propTypes, Footer.propTypes, {});

Footer.NON_SK_COMP_NAME = 'Footer';

export default class SKFooter extends AntdComp {
  static SK_COMP_NAME = 'SKFooter';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Footer.defaultProps, {
    compTag: Footer,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Footer.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFooter.SK_COMP_NAME;
  }
}
