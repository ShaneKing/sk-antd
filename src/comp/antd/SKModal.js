import {Modal} from 'antd';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKModal extends Comp {
  static defaultProps = {
    compTag: Modal
  };
  static propTypes = SK.assign({}, Comp.propTypes, Modal.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleCancel = (domEvent) => {
    this.skVal(false);
  };

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
               onCancel={this.handleCancel.bind(this)}
               visible={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
