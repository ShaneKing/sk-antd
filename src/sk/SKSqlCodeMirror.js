import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import sqlFormatter from 'sql-formatter';
import Comp from '../Comp';
import CodeMirror from '../3/Codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';

CodeMirror.defaultProps = SK.extends(true, {}, {}, CodeMirror.defaultProps, {});

CodeMirror.propTypes = SK.extends(true, {}, {}, CodeMirror.propTypes, {});

CodeMirror.NON_SK_COMP_NAME = 'SqlCodeMirror';

export default class SKSqlCodeMirror extends Comp {
  static SK_COMP_NAME = 'SKSqlCodeMirror';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, CodeMirror.defaultProps, {
    compTag: CodeMirror,
    options: {
      autofocus: true,
      extraKeys: {
        'Alt-/': 'autocomplete',
        'Ctrl-/': 'toggleComment',
      },
      hintOptions: {
        tables: {
          table_example: ['column_example'],
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
  static propTypes = SK.extends(true, {}, Comp.propTypes, CodeMirror.propTypes, {
    formatId: PropTypes.string,
    hintOptionsId: PropTypes.string,
    optionsId: PropTypes.string
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSqlCodeMirror.SK_COMP_NAME;
    this.handleChange = (value) => {
      if (this.props.onChange && _.isFunction(this.props.onChange)) {
        this.props.onChange(value);
      } else {
        this.n2m(value);
      }
    };
    this.handleFormat = () => {
      let selectedCode = this.codeMirrorDomRef.codeMirror.getSelection();
      if (selectedCode) {
        this.codeMirrorDomRef.codeMirror.replaceSelection(sqlFormatter.format(selectedCode), 'around');
      } else {
        this.skVal(sqlFormatter.format(this.skVal()));
      }
    };
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
    this.addChangedMonitor(this.props.hintOptionsId);
    this.skModel().addIdChangedListener(this.props.formatId, this.handleFormat);
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
    this.rmvChangedMonitor(this.props.hintOptionsId);
    this.skModel().rmvIdChangedListener(this.props.formatId, this.handleFormat);
  }

  render() {
    const {compTag: CompTag} = this.props;
    let options = SK.extends(true, {}, SKSqlCodeMirror.defaultProps.options, this.props.options);
    options = this.props.hintOptionsId ? SK.extends(true, {}, options, {hintOptions: this.skModel().skVal(this.props.hintOptionsId)}) : options;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} onChange={this.handleChange} options={options} ref={refNode => this.codeMirrorDomRef = refNode} value={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
