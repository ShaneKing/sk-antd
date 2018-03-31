import { Table } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { SIZE } from '../AntdConst';

Table.defaultProps = SK.assign({}, {
  bordered: false,
  defaultExpandAllRows: false,
  expandRowByClick: false,
  indentSize: 15,
  loading: false,
  rowSelection: null,
  showHeader: true,
  size: SIZE.Default,
}, Table.defaultProps, {});

Table.propTypes = SK.assign({}, {
  //https://ant.design/components/table-cn/#Table
  bordered: PropTypes.bool,
  columns: PropTypes.array,
  components: PropTypes.object,
  dataSource: PropTypes.array,
  defaultExpandAllRows: PropTypes.bool,
  defaultExpandedRowKeys: PropTypes.array,
  expandedRowKeys: PropTypes.array,
  expandedRowRender: PropTypes.func,
  expandRowByClick: PropTypes.bool,
  footer: PropTypes.func,
  indentSize: PropTypes.number,
  loading: PropTypes.any, //
  locale: PropTypes.object,
  pagination: PropTypes.object,
  rowClassName: PropTypes.func,
  rowKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  rowSelection: PropTypes.object,
  scroll: PropTypes.object,
  showHeader: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.func,
  onChange: PropTypes.func,
  onExpand: PropTypes.func,
  onExpandedRowsChange: PropTypes.func,
  onHeaderRow: PropTypes.func,
  onRow: PropTypes.func,
}, Table.propTypes, {});

export default class SKTable extends AntdComp {
  static SK_COMP_NAME = 'SKTable';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Table.defaultProps, {
    compTag: Table,
    bordered: true,
    loadingId: undefined,
    paginationId: undefined,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Table.propTypes, {
    loadingId: PropTypes.string.isRequired,
    paginationId: PropTypes.string.isRequired,
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
    const { compTag: CompTag, columns, scroll } = this.props;

    let tmpScroll = { y: false };
    tmpScroll.x = columns.reduce(($sum, $item) => {
      return $sum + $item.width;
    }, 0);
    tmpScroll = scroll || tmpScroll;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        dataSource={this.skVal()}
        loading={this.skModel().skVal(this.props.loadingId)}
        pagination={this.skModel().skVal(this.props.paginationId)}
        scroll={tmpScroll}
      />
    );
  }
}
