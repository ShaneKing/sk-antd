import { Popover } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import SKPopover from './SKPopover';

/**
 * @NoChild
 */
export default class SKEllipsisPopover extends SKPopover {
  static SK_COMP_NAME = 'SKPopover';
  static SK_EXTEND_COMP_NAME = 'SKEllipsisPopover';
  static defaultProps = SK.extends(true, {}, SKPopover.defaultProps, {
    compTag: Popover,
    ellipsis: 8
  });
  static propTypes = SK.extends(true, {}, SKPopover.propTypes, {
    ellipsis: PropTypes.number
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKEllipsisPopover.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKEllipsisPopover.SK_EXTEND_COMP_NAME;
  }

  render() {
    const {compTag: CompTag, content, ellipsis} = this.props;

    return content.length > ellipsis ? <CompTag {...this.skTransProps2Self(CompTag)}>{SK.ellipsis(content, ellipsis)}</CompTag> : content;
  }
}
