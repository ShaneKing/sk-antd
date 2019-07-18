import PropTypes from 'prop-types';
import { SK } from 'sk-js';

export default class CommonTag {
  static defaultProps = SK.extends(true, {}, {
    closable: false,
    visible: true,
  }, {});
  static propTypes = SK.extends(true, {}, {
    //https://ant.design/components/tag-cn/#Tag
    afterClose: PropTypes.func,
    closable: PropTypes.bool,
    color: PropTypes.string,
    onClose: PropTypes.func,
    visible: PropTypes.bool,
  }, {});
}
