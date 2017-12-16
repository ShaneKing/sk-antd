import {Form} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import {Dir} from '../../util/Const';

Form.defaultProps = SK.assign({}, {
  hideRequiredMark: false,
  layout: Dir.Horizontal
}, Form.defaultProps, {});

Form.propTypes = SK.assign({}, {
  form: PropTypes.object,
  hideRequiredMark: PropTypes.bool,
  layout: PropTypes.oneOf(Object.values(Dir)),
  onSubmit: PropTypes.func
}, Form.propTypes, {});

export default class SKForm extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Form.defaultProps, {
    compTag: Form
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Form.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKForm';
  }
}
