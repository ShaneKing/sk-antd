import { Input } from 'antd/lib/index';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import OriginInput from './OriginInput';
import SKInput from './SKInput';

const {Search} = Input;

Search.defaultProps = SK.extends(true, {}, {
  enterButton: false,
}, OriginInput.defaultProps, Search.defaultProps, {});

Search.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/input-cn/#Input.Search
  enterButton: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onSearch: PropTypes.func,
}, OriginInput.propTypes, Search.propTypes, {});

Search.NON_SK_COMP_NAME = 'Search';

export default class SKSearch extends SKInput {
  static SK_COMP_NAME = 'SKSearch';
  static defaultProps = SK.extends(true, {}, SKInput.defaultProps, Search.defaultProps, {
    compTag: Search,
  });
  static propTypes = SK.extends(true, {}, SKInput.propTypes, Search.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSearch.SK_COMP_NAME;
  }
}
