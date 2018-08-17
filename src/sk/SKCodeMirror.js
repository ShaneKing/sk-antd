import PropTypes from 'prop-types';
import React from 'react';
import CodeMirror from 'react-codemirror';
import {SK} from 'sk-js';
import Comp from '../Comp';

CodeMirror.defaultProps = SK.extend(true, {}, {}, CodeMirror.defaultProps, {});

CodeMirror.propTypes = SK.extend(true, {}, {}, CodeMirror.propTypes, {});

CodeMirror.NON_SK_COMP_NAME = 'CodeMirror';

export default class SKCodeMirror extends Comp {
  static SK_COMP_NAME = 'SKCodeMirror';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, CodeMirror.defaultProps, {
    compTag: CodeMirror,
  });
  static propTypes = SK.extend(true, {}, Comp.propTypes, CodeMirror.propTypes, {
    optionsId: PropTypes.string
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCodeMirror.SK_COMP_NAME;
    this.handleChange = (value) => {
      this.skVal(value);
    }
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} onChange={this.handleChange} options={this.props.options || this.skModel().skVal(this.props.optionsId)} value={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
