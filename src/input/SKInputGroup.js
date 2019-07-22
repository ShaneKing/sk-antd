import { Input } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { SIZE } from '../AntdConst';

const {Group} = Input;

Group.defaultProps = SK.extends(true, {}, {
  compact: false,
  size: SIZE.Default,
}, Group.defaultProps, {});

Group.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/input-cn/#Input.Group
  compact: PropTypes.bool,
  size: PropTypes.string,
}, Group.propTypes, {});

Group.NON_SK_COMP_NAME = 'InputGroup';

export default class SKInputGroup extends AntdComp {
  static SK_COMP_NAME = 'SKInputGroup';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Group.defaultProps, {
    compTag: Group,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Group.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKInputGroup.SK_COMP_NAME;
  }
}
