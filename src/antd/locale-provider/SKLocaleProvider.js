import { LocaleProvider } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

LocaleProvider.defaultProps = SK.assign({}, {}, LocaleProvider.defaultProps, {});

LocaleProvider.propTypes = SK.assign({}, {
  //https://ant.design/components/grid-cn/#LocaleProvider\
  locale: PropTypes.object,
}, LocaleProvider.propTypes, {});

export default class SKLocaleProvider extends AntdComp {
  static SK_COMP_NAME = 'SKLocaleProvider';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, LocaleProvider.defaultProps, {
    compTag: LocaleProvider,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, LocaleProvider.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKLocaleProvider.SK_COMP_NAME;
  }

  render() {
    const { compTag: CompTag } = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        locale={this.skVal()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
