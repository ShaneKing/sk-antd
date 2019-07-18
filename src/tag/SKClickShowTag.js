import { Mesgs, Proxy0, SK } from 'sk-js';
import { Tag } from 'antd/lib/index';
import React from 'react';
import PropTypes from 'prop-types';
import SKCheckableTag from './SKCheckableTag';

//if modelId exist, checked state use pubs.pubX...
//else use react state
/**
 * @NoChild
 */
export default class SKClickShowTag extends SKCheckableTag {
  static SK_COMP_NAME = 'SKCheckableTag';
  static SK_EXTEND_COMP_NAME = 'SKClickShowTag';
  static defaultProps = SK.extends(true, {}, SKCheckableTag.defaultProps, {
    compTag: Tag.CheckableTag,
  });
  static propTypes = SK.extends(true, {}, SKCheckableTag.propTypes, {
    showId: PropTypes.string,
  });

  state = {
    checked: false,
  };

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKClickShowTag.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKClickShowTag.SK_EXTEND_COMP_NAME;
    this.handleChange = (checked) => {
      if (this.props.ssChange && Proxy0._.isFunction(this.props.ssChange)) {
        this.props.ssChange(checked);
      } else {
        if (this.props.showId) {
          this.skModel().skVal(this.props.showId, checked)
        } else {
          this.setState({checked: checked});
        }
      }
    }
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
    this.addChangedMonitor(this.props.showId);
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
    this.rmvChangedMonitor(this.props.showId);
  }

  render() {
    const {compTag: CompTag, showId, scroll} = this.props;

    const checked = showId ? this.skModel().skVal(showId) : this.state.checked;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        checked={checked}
        onChange={this.handleChange}
      >
        {checked ? this.skTransProps2Child() : Mesgs.get('Click_Show')}
      </CompTag>
    );
  }

}
