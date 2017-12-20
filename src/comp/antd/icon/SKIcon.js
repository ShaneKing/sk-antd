import {Icon} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Icon.defaultProps = SK.assign({}, {
  spin: false
}, Icon.defaultProps, {});

Icon.propTypes = SK.assign({}, {
  //https://ant.design/components/icon-cn/#API
  spin: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string
}, Icon.propTypes, {});

export default class SKIcon extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Icon.defaultProps, {
    compTag: Icon
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Icon.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKIcon';
  }
}
