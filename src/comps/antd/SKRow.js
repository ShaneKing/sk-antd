import {Row} from 'antd';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKRow extends Comp {
  static defaultProps = {
    compTag: Row
  };
  static propTypes = SK.assign({}, Comp.propTypes, Row.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, gutter} = this.props;
    gutter = gutter || this.skProp(Comp.SK_PROPS.GRID_GUTTER);

    return (
      <CompTag {...this.compValidProps(CompTag)}
        gutter={gutter}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
