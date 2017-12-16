import {Layout} from 'antd';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Layout.Content.defaultProps = SK.assign({}, {}, Layout.defaultProps, Layout.Content.defaultProps, {});
Layout.Content.propTypes = SK.assign({}, {}, Layout.propTypes, Layout.Content.propTypes, {});

export default class SKContent extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.Content.defaultProps, {
    compTag: Layout.Content
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.Content.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKContent';
  }
}
