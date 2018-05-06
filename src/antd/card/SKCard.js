import { Card } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

Card.defaultProps = SK.extend(true, {}, {
  bordered: true,
  hoverable: false,
  loading: false,
}, Card.defaultProps, {});

Card.propTypes = SK.extend(true, {}, {
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

export default class SKCard extends AntdComp {
  static SK_COMP_NAME = 'SKCard';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Card.defaultProps, {
    compTag: Card,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Card.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCard.SK_COMP_NAME;
  }
}
