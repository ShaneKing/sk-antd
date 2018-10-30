//<SKJdenticon modelId='user.username' size={32}/>
import jdenticon from 'jdenticon';
import md5 from 'js-md5';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKJdenticon extends Comp {
  static SK_COMP_NAME = 'SKJdenticon';
  static defaultProps = SK.extend(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.canvas,

  });
  static propTypes = SK.extend(true, {}, Comp.propTypes, {
    size: PropTypes.number,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKJdenticon.SK_COMP_NAME;
  }

  componentDidMount() {
    super.componentDidMount();
    jdenticon.update(this.refs.jdenticonDomRef, md5(this.skVal()));
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    jdenticon.update(this.refs.jdenticonDomRef, md5(this.skVal()));
  }

  render() {
    const {compTag: CompTag, size} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} height={size} width={size} ref="jdenticonDomRef"/>
    );
  }
}
