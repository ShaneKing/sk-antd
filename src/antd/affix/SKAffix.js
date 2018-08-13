import {Affix} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Affix.defaultProps = SK.extend(true, {}, {}, Affix.defaultProps, {});

Affix.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/Affix-cn/#API
  offsetBottom: PropTypes.number,
  offsetTop: PropTypes.number,
  target: PropTypes.func,
  onChange: PropTypes.func,
}, Affix.propTypes, {});

Affix.NON_SK_COMP_NAME = 'Affix';

export default class SKAffix extends AntdComp {
  static SK_COMP_NAME = 'SKAffix';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Affix.defaultProps, {
    compTag: Affix,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Affix.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKAffix.SK_COMP_NAME;
  }
}
