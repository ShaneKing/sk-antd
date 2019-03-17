import {Tooltip} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import SKTooltip from './SKTooltip';

/**
 * @NoChild
 */
export default class SKEllipsisTooltip extends SKTooltip {
  static SK_COMP_NAME = 'SKTooltip';
  static SK_EXTEND_COMP_NAME = 'SKEllipsisTooltip';
  static defaultProps = SK.extends(true, {}, SKTooltip.defaultProps, {
    compTag: Tooltip,
    ellipsis: 8
  });
  static propTypes = SK.extends(true, {}, SKTooltip.propTypes, {
    ellipsis: PropTypes.number
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKEllipsisTooltip.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKEllipsisTooltip.SK_EXTEND_COMP_NAME;
  }

  render() {
    const {compTag: CompTag, title, ellipsis} = this.props;

    return title.length > ellipsis ? <CompTag {...this.skTransProps2Self(CompTag)}>{SK.ellipsis(title, ellipsis)}</CompTag> : title;
  }
}
