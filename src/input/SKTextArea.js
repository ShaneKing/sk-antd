import { Input } from 'antd/lib/index';
import PropTypes from 'prop-types';
import { Mesgs } from 'sk-i18n';
import { Proxy0, SK } from 'sk-js';
import AntdComp from '../AntdComp';
import React from 'react';

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

/**
 * @HasPreview
 * @MustModelId
 */
export default class SKTextArea extends AntdComp {
  static SK_COMP_NAME = 'SKTextArea';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, TextArea.defaultProps, {
    compTag: TextArea,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, TextArea.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKTextArea.SK_COMP_NAME;
    this.handleChange = (domEvent) => {
      if (this.props.ssChange && Proxy0._.isFunction(this.props.ssChange)) {
        this.props.ssChange(domEvent);
      } else {
        this.n2m(domEvent.target.value);
      }
    };
  }

  renderComp() {
    const {compTag: CompTag, placeholder} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={placeholder || Mesgs.get('Please_input')}
        value={this.m2n()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }

  renderPreview() {
    return this.renderAntdCompPreview();
  }
}
