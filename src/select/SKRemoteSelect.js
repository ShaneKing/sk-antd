import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import SKSelect from './SKSelect';

export default class SKRemoteSelect extends SKSelect {
  static SK_COMP_NAME = 'SKSelect';
  static SK_EXTEND_COMP_NAME = 'SKRemoteSelect';
  static defaultProps = SK.extends(true, {}, SKSelect.defaultProps, {
    filterOption: false,
  });
  static propTypes = SK.extends(true, {}, SKSelect.propTypes, {
    dataId: PropTypes.string.required,
    ssSearch: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKRemoteSelect.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKRemoteSelect.SK_EXTEND_COMP_NAME;
    this.handleSearch = (value) => {
      if (this.props.ssSearch && Proxy0._.isFunction(this.props.ssSearch)) {
        this.props.ssSearch(value);
      }
    };
  }
}
