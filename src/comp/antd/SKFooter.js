import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Layout.Footer.defaultProps = SK.assign({}, {}, Layout.defaultProps, Layout.Footer.defaultProps, {});
Layout.Footer.propTypes = SK.assign({}, {}, Layout.propTypes, Layout.Footer.propTypes, {});

export default class SKFooter extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.Footer.defaultProps, {
    compTag: Layout.Footer
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.Footer.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKFooter';
  }
}
