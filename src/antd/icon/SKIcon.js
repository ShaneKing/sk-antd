import {Icon} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Icon.defaultProps = SK.extends(true, {}, {
  spin: false,
}, Icon.defaultProps, {});

Icon.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/icon-cn/#API
  spin: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
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
