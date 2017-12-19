import {Table} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKTable extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Table,
    bordered: true,
    loadingId: undefined,
    paginationId: undefined
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {
    loadingId: PropTypes.string.isRequired,
    paginationId: PropTypes.string.isRequired
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKTable';
  }

  addExtendChangedMonitor() {
    this.addChangedMonitor(this.props.loadingId);
    this.addChangedMonitor(this.props.paginationId);
  }

  rmvExtendChangedMonitor() {
    this.rmvChangedMonitor(this.props.loadingId);
    this.rmvChangedMonitor(this.props.paginationId);
  }

  render() {
    let {compTag: CompTag, columns, scroll} = this.props;

    let tmpScroll = {y: false};
    tmpScroll.x = columns.reduce(($sum, $item) => {
      return $sum + $item.width;
    }, 0);
    tmpScroll = scroll || tmpScroll;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               dataSource={this.skVal()}
               loading={this.skModel().skVal(this.props.loadingId)}
               pagination={this.skModel().skVal(this.props.paginationId)}
               scroll={tmpScroll}/>
    );
  }
}
