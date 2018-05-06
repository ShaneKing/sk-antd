import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

Icon.defaultProps = SK.extend(true, {}, {
  spin: false,
}, Icon.defaultProps, {});

Icon.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/icon-cn/#API
  spin: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
}, Icon.propTypes, {});

export default class SKIcon extends AntdComp {
  static SK_COMP_NAME = 'SKIcon';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Icon.defaultProps, {
    compTag: Icon,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Icon.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKIcon.SK_COMP_NAME;
  }
}
