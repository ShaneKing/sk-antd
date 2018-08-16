//https://github.com/uiw-react/react-codemirror/blob/master/src/lib/CodeMirror.js
//https://github.com/uiw-react/react-codemirror/blob/master/src/lib/index.js
import CodeMirror from 'codemirror';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

/*eslint react/no-string-refs: "off"*/

function normalizeLineEndings(str) {
  if (!str) return str;
  return str.replace(/\r\n|\r/g, '\n');
}

export default class SKCodeMirror extends Comp {
  static SK_COMP_NAME = 'SKCodeMirror';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.div,
    preserveScrollPosition: false,
  });
  static propTypes = SK.extend(true, {}, Comp.propTypes, {
    autoFocus: PropTypes.bool,
    className: PropTypes.any,
    codeMirrorInstance: PropTypes.func,
    defaultValue: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onCursorActivity: PropTypes.func,
    onFocusChange: PropTypes.func,
    onScroll: PropTypes.func,
    options: PropTypes.object,
    path: PropTypes.string,
    value: PropTypes.string,
    preserveScrollPosition: PropTypes.bool,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCodeMirror.SK_COMP_NAME;
    this.state = {
      codeMirrorOptions: {},
    };
  }

  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || CodeMirror;
  };

  componentDidMount() {
    super.componentDidMount();
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(this.textareaNode, this.props.options);
    this.codeMirror.on('change', this.codemirrorValueChanged.bind(this));
    this.codeMirror.on('cursorActivity', this.cursorActivity.bind(this));
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this.codeMirror.on('scroll', this.scrollChanged.bind(this));
    this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
  };

  componentWillUnmount() {
    // is there a lighter-weight way to remove the cm instance?
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
    super.componentWillUnmount();
  };

  componentWillReceiveProps(nextProps) {
    if (this.codeMirror && nextProps.value !== undefined && nextProps.value !== this.props.value && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
      if (this.props.preserveScrollPosition) {
        let prevScrollPosition = this.codeMirror.getScrollInfo();
        this.codeMirror.setValue(nextProps.value);
        this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
      } else {
        this.codeMirror.setValue(nextProps.value);
      }
    }
    if (typeof nextProps.options === 'object') {
      for (let optionName in nextProps.options) {
        if (nextProps.options.hasOwnProperty(optionName)) {
          this.setOptionIfChanged(optionName, nextProps.options[optionName]);
        }
      }
    }
  };

  setOptionIfChanged(optionName, newValue) {
    const oldValue = this.codeMirror.getOption(optionName);
    if (!_.isEqual(oldValue, newValue)) {
      this.codeMirror.setOption(optionName, newValue);
    }
  };

  getCodeMirror() {
    return this.codeMirror;
  };

  focus() {
    if (this.codeMirror) {
      this.codeMirror.focus();
    }
  };

  focusChanged(focused) {
    this.setState({
      isFocused: focused,
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  };

  cursorActivity(cm) {
    this.props.onCursorActivity && this.props.onCursorActivity(cm);
  };

  scrollChanged(cm) {
    this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
  };

  codemirrorValueChanged(doc, change) {
    if (change.origin !== 'setValue') {
      if (this.props.onChange) {
        this.props.onChange(doc.getValue(), change);
      } else {
        this.skVal(doc.getValue());
      }
    }
  };

  render() {
    const {compTag: CompTag} = this.props;
    const editorClassName = classNames(
      'ReactCodeMirror',
      this.state.isFocused ? 'ReactCodeMirror--focused' : null,
      this.props.className
    );

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} className={editorClassName}>
        <textarea
          ref={ref => this.textareaNode = ref}
          name={this.props.name || this.props.path}
          defaultValue={this.skVal() || this.props.value}
          autoComplete="off"
          autoFocus={this.props.autoFocus}
        />
      </CompTag>
    );
  }
}
