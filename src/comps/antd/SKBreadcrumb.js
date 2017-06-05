import {Breadcrumb} from 'antd';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKCol extends Comp {
  static defaultProps = {
    compTag: Breadcrumb
  };
  static propTypes = SK.assign({}, Comp.propTypes, Breadcrumb.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, routes, params} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        params={params}
        routes={routes}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
