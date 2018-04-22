import { Dropdown } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

Dropdown.defaultProps = SK.assign({}, {
}, Dropdown.defaultProps, {});

Dropdown.propTypes = SK.assign({}, {
  //http://ant-design.gitee.io/components/dropdown-cn/#API
  disabled: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  overlay: PropTypes.element,
  placement: PropTypes.string,
  trigger: PropTypes.array,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
}, Dropdown.propTypes, {});

export default class SKDropdown extends AntdComp {
  static SK_COMP_NAME = 'SKDropdown';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Dropdown.defaultProps, {
    compTag: Dropdown,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Dropdown.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKDropdown.SK_COMP_NAME;
  }
}
