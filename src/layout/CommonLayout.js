import PropTypes from 'prop-types';
import {SK} from 'sk-js';

export default class CommonLayout {
  static defaultProps = SK.extends(true, {}, {}, {});
  static propTypes = SK.extends(true, {}, {
    //https://ant.design/components/layout-cn/#Layout
    className: PropTypes.string,
    hasSider: PropTypes.bool,
    style: PropTypes.object,
  }, {});
}
