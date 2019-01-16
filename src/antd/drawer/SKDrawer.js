import {Drawer} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import {PLACEMENT} from '../AntdConst';

Drawer.defaultProps = SK.extends(true, {}, {}, Drawer.defaultProps, {});

Drawer.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/Drawer-cn/#API
  closable: PropTypes.bool,
  destroyOnClose: PropTypes.bool,
  getContainer: PropTypes.any,
  maskClosable: PropTypes.bool,
  mask: PropTypes.bool,
  maskStyle: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  zIndex: PropTypes.number,
  placement: PropTypes.oneOf([PLACEMENT.Left, PLACEMENT.Right]),
  onClose: PropTypes.func,
}, Drawer.propTypes, {});

Drawer.NON_SK_COMP_NAME = 'Drawer';

export default class SKDrawer extends AntdComp {
  static SK_COMP_NAME = 'SKDrawer';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Drawer.defaultProps, {
    compTag: Drawer,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Drawer.propTypes, {
    ssClose: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKDrawer.SK_COMP_NAME;
    this.handleClose = () => {
      if (this.props.ssClose && _.isFunction(this.props.ssClose)) {
        this.props.ssClose(this);
      } else {
        this.n2m(false);
      }
    };
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} onClose={this.handleClose} visible={this.m2n()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
