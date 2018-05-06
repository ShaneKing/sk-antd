import { Input } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import OriginInput from './OriginInput';
import SKInput from './SKInput';

const {Search} = Input;

Search.defaultProps = SK.extend(true, {}, {
  enterButton: false,
}, OriginInput.defaultProps, Search.defaultProps, {});

Search.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/input-cn/#Input.Search
  enterButton: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onSearch: PropTypes.func,
}, OriginInput.propTypes, Search.propTypes, {});

export default class SKSearch extends SKInput {
  static SK_COMP_NAME = 'SKSearch';
  static defaultProps = SK.extend(true, {}, SKInput.defaultProps, Search.defaultProps, {
    compTag: Search,
  });
  static propTypes = SK.extend(true, {}, SKInput.propTypes, Search.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSearch.SK_COMP_NAME;
  }
}
