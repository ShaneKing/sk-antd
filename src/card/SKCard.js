import { Card } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

Card.defaultProps = SK.extends(true, {}, {
  bordered: true,
  hoverable: false,
  loading: false,
}, Card.defaultProps, {});

Card.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/card-cn/#Card
  actions: PropTypes.array,
  bodyStyle: PropTypes.object,
  bordered: PropTypes.bool,
  cover: PropTypes.node,
  extra: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  hoverable: PropTypes.bool,
  loading: PropTypes.bool,
  tabList: PropTypes.any,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  type: PropTypes.string,
  onTabChange: PropTypes.func,
}, Card.propTypes, {});

Card.NON_SK_COMP_NAME = 'Card';

export default class SKCard extends AntdComp {
  static SK_COMP_NAME = 'SKCard';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Card.defaultProps, {
    compTag: Card,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Card.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCard.SK_COMP_NAME;
  }
}
