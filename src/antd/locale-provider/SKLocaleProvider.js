import {LocaleProvider} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

LocaleProvider.defaultProps = SK.extend(true, {}, {}, LocaleProvider.defaultProps, {});

LocaleProvider.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/grid-cn/#LocaleProvider\
  locale: PropTypes.object,
}, LocaleProvider.propTypes, {});

LocaleProvider.NON_SK_COMP_NAME = 'LocaleProvider';

export default class SKLocaleProvider extends AntdComp {
  static SK_COMP_NAME = 'SKLocaleProvider';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, LocaleProvider.defaultProps, {
    compTag: LocaleProvider,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, LocaleProvider.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKLocaleProvider.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;

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
