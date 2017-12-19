import {Row} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKRow extends AntdComp {
  static SK_PROPS = {
    GRID_GUTTER: 'gridGutter',
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Row
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {
    gridGutter: PropTypes.number,
    skGridGutter: PropTypes.number
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKRow';
  }

  render() {
    let {compTag: CompTag, gutter} = this.props;
    gutter = gutter || this.skProp(SKRow.SK_PROPS.GRID_GUTTER);

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               gutter={gutter}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
