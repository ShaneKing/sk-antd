import classNames from 'classnames/dedupe';
import {Layout} from 'antd';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKLayout extends Comp {
  static defaultProps = {
    compTag: Layout
  };
  static propTypes = SK.assign({}, Comp.propTypes, Layout.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, className} = this.props;

    let classes = {};
    classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

    return (
      <CompTag {...this.compValidProps(CompTag)} className={classNames(classes, className)}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
