import {Modal} from 'antd';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKModal extends Comp {
  static defaultProps = {
    compTag: Modal
  };
  static propTypes = SK.assign({}, Comp.propTypes, Modal.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleCancel = () => {
    this.skVal(false);
  };

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        visible={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
