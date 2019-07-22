import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { SHAPE, SIZE } from '../AntdConst';

Avatar.defaultProps = SK.extends(true, {}, {
  shape: SHAPE.Circle,
  size: SIZE.Default,
}, Avatar.defaultProps, {});

Avatar.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/avatar-cn/#API
  alt: PropTypes.string,
  icon: PropTypes.string,
  shape: PropTypes.oneOf(Object.values(SHAPE)),
  dot: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZE)),
  src: PropTypes.string,
  onError: PropTypes.func,
}, Avatar.propTypes, {});

Avatar.NON_SK_COMP_NAME = 'Avatar';

/**
 * @MustModels
 */
export default class SKAvatar extends AntdComp {
  static SK_COMP_NAME = 'SKAvatar';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Avatar.defaultProps, {
    compTag: Avatar,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Avatar.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKAvatar.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} alt={this.m2n()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
