import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import sqlFormatter from "sql-formatter";
import Comp from '../Comp';
import CodeMirror from '../3/Codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/addon/display/fullscreen.js';
import 'codemirror/addon/display/placeholder.js';

import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';

CodeMirror.defaultProps = SK.extend(true, {}, {}, CodeMirror.defaultProps, {});

CodeMirror.propTypes = SK.extend(true, {}, {}, CodeMirror.propTypes, {});

CodeMirror.NON_SK_COMP_NAME = 'SqlCodeMirror';

export default class SKSqlCodeMirror extends Comp {
  static SK_COMP_NAME = 'SKSqlCodeMirror';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, CodeMirror.defaultProps, {
    compTag: CodeMirror,
    autoFormat: true,
    options: {
      autofocus: true,
      extraKeys: {"Ctrl-Space": "autocomplete"},
      hintOptions: {
        tables: {
          Table_Name1: ["Column_Name1", "Column_Name2"],
          Table_Name2: ["Column_Name1", "Column_Name2"],
        }
      },
      indentWithTabs: true,
      lineNumbers: true,
      matchBrackets: true,
      mode: 'text/x-sql',
      placeholder: Mesgs.get('Please_input'),
      smartIndent: true,
    }
  });
  static propTypes = SK.extend(true, {}, Comp.propTypes, CodeMirror.propTypes, {
    formatSelectedId: PropTypes.string,
    optionsId: PropTypes.string
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSqlCodeMirror.SK_COMP_NAME;
    this.handleChange = (value) => {
      this.skVal(value);
    };
    this.handleFormatSelected = () => {
      this.refs.codeMirrorDomRef.codeMirror.replaceSelection(sqlFormatter.format(this.refs.codeMirrorDomRef.codeMirror.getSelection()), 'around');
    };
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
    this.addChangedMonitor(this.props.optionsId);
    this.skModel().addIdChangedListener(this.props.formatSelectedId, this.handleFormatSelected);
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
    this.rmvChangedMonitor(this.props.optionsId);
    this.skModel().rmvIdChangedListener(this.props.formatSelectedId, this.handleFormatSelected);
  }

  render() {
    const {compTag: CompTag} = this.props;
    let options = this.props.optionsId ? this.skModel().skVal(this.props.optionsId) : this.props.options;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} onChange={this.handleChange} options={options} ref="codeMirrorDomRef" value={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
