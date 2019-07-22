import { LocaleProvider } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

LocaleProvider.defaultProps = SK.extends(true, {}, {}, LocaleProvider.defaultProps, {});

LocaleProvider.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/grid-cn/#LocaleProvider\
  locale: PropTypes.object,
}, LocaleProvider.propTypes, {});

LocaleProvider.NON_SK_COMP_NAME = 'LocaleProvider';

/**
 * @MustModels
 */
export default class SKLocaleProvider extends AntdComp {
  static SK_COMP_NAME = 'SKLocaleProvider';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, LocaleProvider.defaultProps, {
    compTag: LocaleProvider,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, LocaleProvider.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKLocaleProvider.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        locale={this.m2n()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
