import { SK } from 'sk-js';
import { SKGoJSDag } from 'sk-react';
import FormComp from './FormComp';

export default class SKFormGoJSDag extends FormComp {
  static SK_COMP_NAME = 'SKGoJSDag';
  static SK_EXTEND_COMP_NAME = 'SKFormGoJSDag';
  static defaultProps = SK.extends(true, {}, FormComp.defaultProps, SKGoJSDag.defaultProps, {
    compTag: SKGoJSDag,
  });
  static propTypes = SK.extends(true, {}, FormComp.propTypes, SKGoJSDag.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormGoJSDag.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormGoJSDag.SK_EXTEND_COMP_NAME;
  }
}
