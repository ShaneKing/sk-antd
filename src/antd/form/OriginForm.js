import {Form} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {Dir} from '../../../util/Const';

export default class OriginForm {
  static defaultProps = SK.assign({}, {
    hideRequiredMark: false,
    layout: Dir.Horizontal
  }, Form.defaultProps, {});
  static propTypes = SK.assign({}, {
    //https://ant.design/components/form-cn/#Form
    form: PropTypes.object,
    hideRequiredMark: PropTypes.bool,
    layout: PropTypes.oneOf(Object.values(Dir)),
    onSubmit: PropTypes.func
  }, Form.propTypes, {});
}
