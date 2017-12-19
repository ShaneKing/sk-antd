import {Modal} from 'antd';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKModal extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Modal
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKModal';
    this.handleCancel = (domEvent) => {
      this.skVal(false);
    }
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onCancel={this.handleCancel}
               visible={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
