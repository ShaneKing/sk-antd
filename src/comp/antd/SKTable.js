import {Table} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

Table.propTypes = SK.assign({}, Table.propTypes, {
  rowKey: React.PropTypes.func,
  scroll: React.PropTypes.object,
  size: React.PropTypes.string
}, {});

export default class SKTable extends Comp {
  static defaultProps = {
    compTag: Table,
    bordered: true,
    loadingId: undefined,
    paginationId: undefined
  };
  static propTypes = SK.assign({}, Comp.propTypes, Table.propTypes, {
    loadingId: React.PropTypes.string.isRequired,
    paginationId: React.PropTypes.string.isRequired
  });

  constructor(...args) {
    super(...args);
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
      <CompTag {...this.compValidProps(CompTag)}
        dataSource={this.skVal()}
        loading={this.iModel().skVal(this.props.loadingId)}
        pagination={this.iModel().skVal(this.props.paginationId)}
        scroll={tmpScroll}/>
    );
  }
}
