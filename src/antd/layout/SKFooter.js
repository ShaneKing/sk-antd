import { Layout } from 'antd';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

const {Footer} = Layout;

Footer.defaultProps = SK.extend(true, {}, {}, OriginLayout.defaultProps, Footer.defaultProps, {});
Footer.propTypes = SK.extend(true, {}, {}, OriginLayout.propTypes, Footer.propTypes, {});

export default class SKFooter extends AntdComp {
  static SK_COMP_NAME = 'SKFooter';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Footer.defaultProps, {
    compTag: Layout.Footer,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Footer.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFooter.SK_COMP_NAME;
  }
}
