import {Input} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import AntdComp from './../AntdComp';

const {TextArea} = Input;

TextArea.defaultProps = SK.extends(true, {}, {}, TextArea.defaultProps, {});

TextArea.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/input-cn/#Input.TextArea
  autosize: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onPressEnter: PropTypes.func,
}, TextArea.propTypes, {});

TextArea.NON_SK_COMP_NAME = 'TextArea';

export default class SKTextArea extends AntdComp {
  static SK_COMP_NAME = 'SKTextArea';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, TextArea.defaultProps, {
    compTag: TextArea,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, TextArea.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKTextArea.SK_COMP_NAME;
  }
}
