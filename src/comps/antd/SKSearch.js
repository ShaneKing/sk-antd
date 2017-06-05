import {Input} from 'antd';
import _ from 'lodash';
import React from 'react';
import SK from 'sk-js';
import SKInput from './SKInput';

export default class SKSearch extends SKInput {
  static defaultProps = SK.assign({}, Input.Search.defaultProps, {
    compTag: Input.Search
  });
  static propTypes = SK.assign({}, SKInput.propTypes, Input.Search.propTypes, {
    searchFuncId: React.PropTypes.string
  });

  constructor(...args) {
    super(...args);
  }

  handleSearch(value) {
    if (this.props.searchFuncId) {
      let searchFunc = this.iModel().skVal(this.props.searchFuncId);
      if (_.isFunction(searchFunc)) {
        searchFunc(value);
      }
    }
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        onChange={this.handleChange.bind(this)}
        onSearch={this.handleSearch.bind(this)}
        value={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
