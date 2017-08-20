import {Layout} from 'antd';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKContent extends Comp {
  static defaultProps = {
    compTag: Layout.Content
  };
  static propTypes = SK.assign({}, Comp.propTypes, Layout.Content.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
