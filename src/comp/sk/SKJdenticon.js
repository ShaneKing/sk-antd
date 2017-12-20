//<SKJdenticon modelId='user.username' size={32}/>
import jdenticon from 'jdenticon';
import md5 from 'js-md5';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKJdenticon extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.canvas

  });
  static propTypes = SK.assign({}, Comp.propTypes, {
    size: PropTypes.number
  });

  constructor(...props) {
    super(...props);
    this.compName = 'SKJdenticon';
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
    let {compTag: CompTag, size} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} height={size} width={size} ref='jdenticonDomRef'/>
    );
  }
}
