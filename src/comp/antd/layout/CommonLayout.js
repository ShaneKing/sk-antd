import PropTypes from 'prop-types';
import {SK} from 'sk-js';

export default class CommonLayout {
  static defaultProps = SK.assign({}, {}, {});
  static propTypes = SK.assign({}, {
    //https://ant.design/components/layout-cn/#Layout
    className: PropTypes.string,
    style: PropTypes.object
  }, {});
}
