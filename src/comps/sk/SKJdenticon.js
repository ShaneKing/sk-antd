//<SKJdenticon modelId='user.username' size={32}/>
import jdenticon from 'jdenticon';
import md5 from 'js-md5';
import React from 'react';
import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKJdenticon extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.canvas

  };
  static propTypes = SK.assign({}, Comp.SK_PROPS_TYPE, {
    size: React.PropTypes.number
  });

  constructor(...props) {
    super(...props);
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
      <CompTag {...this.compValidProps(CompTag)} height={size} width={size} ref='jdenticonDomRef'/>
    );
  }
}
