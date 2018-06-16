import { Layout } from 'antd';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import OriginLayout from './OriginLayout';

const {Content} = Layout;

Content.defaultProps = SK.extend(true, {}, {}, OriginLayout.defaultProps, Content.defaultProps, {});
Content.propTypes = SK.extend(true, {}, {}, OriginLayout.propTypes, Content.propTypes, {});

Content.NON_SK_COMP_NAME = 'Content';

export default class SKContent extends AntdComp {
  static SK_COMP_NAME = 'SKContent';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Content.defaultProps, {
    compTag: Content,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Content.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKContent.SK_COMP_NAME;
  }
}
