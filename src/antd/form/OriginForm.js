import { Form } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import { Dir } from '../AntdConst';

Form.defaultProps = SK.extend(true, {}, {
  hideRequiredMark: false,
  layout: Dir.Horizontal,
}, Form.defaultProps, {});
Form.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/form-cn/#Form
  form: PropTypes.object,
  hideRequiredMark: PropTypes.bool,
  layout: PropTypes.oneOf(Object.values(Dir)),
  onSubmit: PropTypes.func,
}, Form.propTypes, {});

export default class OriginForm {
  static defaultProps = SK.extend(true, {}, Form.defaultProps, {});
  static propTypes = SK.extend(true, {}, Form.propTypes, {});
}
