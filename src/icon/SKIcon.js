import { Icon } from 'antd/lib/index';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { ICON_THEME } from '../AntdConst';

Icon.defaultProps = SK.extends(true, {}, {
  spin: false,
  theme: ICON_THEME.Outlined,
}, Icon.defaultProps, {});

Icon.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/icon-cn/#API
  // component: PropTypes.any
  rotate: PropTypes.number,
  spin: PropTypes.bool,
  style: PropTypes.object,
  theme: PropTypes.string,
  type: PropTypes.string,
  twoToneColor: PropTypes.string,
}, Icon.propTypes, {});

Icon.NON_SK_COMP_NAME = 'Icon';

export default class SKIcon extends AntdComp {
  static SK_COMP_NAME = 'SKIcon';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Icon.defaultProps, {
    compTag: Icon,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Icon.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKIcon.SK_COMP_NAME;
  }
}
