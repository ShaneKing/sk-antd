import { Input } from 'antd';
import PropTypes from 'prop-types';
import { Mesgs, SK } from 'sk-js';
import OriginInput from './OriginInput';
import SKInput from './SKInput';
import AntdComp from '../AntdComp';

const {TextArea} = Input;

TextArea.defaultProps = SK.extend(true, {}, {
}, OriginInput.defaultProps, TextArea.defaultProps, {});

TextArea.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/input-cn/#Input.TextArea
  autosize: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onPressEnter: PropTypes.func,
}, OriginInput.propTypes, TextArea.propTypes, {});

TextArea.NON_SK_COMP_NAME = 'TextArea';

export default class SKTextArea extends SKInput {
  static SK_COMP_NAME = 'SKTextArea';
  static defaultProps = SK.extend(true, {}, SKInput.defaultProps, TextArea.defaultProps, {
    compTag: TextArea,
  });
  static propTypes = SK.extend(true, {}, SKInput.propTypes, TextArea.propTypes, {});
}
