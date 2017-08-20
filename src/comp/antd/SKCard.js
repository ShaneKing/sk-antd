import {Card} from 'antd';
import SK from 'sk-js';
import React from 'react';
import Comp from '../../util/Comp';

Card.propTypes = SK.assign({}, Card.propTypes, {
  bodyStyle: React.PropTypes.object
}, {});

export default class SKCard extends Comp {
  static defaultProps = {
    compTag: Card
  };
  static propTypes = SK.assign({}, Comp.propTypes, Card.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
