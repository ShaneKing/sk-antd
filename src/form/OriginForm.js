import {Form} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {Dir} from '../AntdConst';

Form.defaultProps = SK.extends(true, {}, {
  hideRequiredMark: false,
  layout: Dir.Horizontal,
}, Form.defaultProps, {});
Form.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/form-cn/#Form
  form: PropTypes.object,
  hideRequiredMark: PropTypes.bool,
  layout: PropTypes.oneOf(Object.values(Dir)),
  onSubmit: PropTypes.func,
}, Form.propTypes, {});

Form.NON_SK_COMP_NAME = 'Form';

export default class OriginForm {
  static defaultProps = SK.extends(true, {}, Form.defaultProps, {});
  static propTypes = SK.extends(true, {}, Form.propTypes, {});
}
