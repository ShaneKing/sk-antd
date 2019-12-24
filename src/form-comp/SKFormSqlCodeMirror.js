import { SK } from 'sk-js';
import { SKSqlCodeMirror } from 'sk-react';
import FormComp from './FormComp';

export default class SKFormSqlCodeMirror extends FormComp {
  static SK_COMP_NAME = 'SKSqlCodeMirror';
  static SK_EXTEND_COMP_NAME = 'SKFormSqlCodeMirror';
  static defaultProps = SK.extends(true, {}, FormComp.defaultProps, SKSqlCodeMirror.defaultProps, {
    compTag: SKSqlCodeMirror,
  });
  static propTypes = SK.extends(true, {}, FormComp.propTypes, SKSqlCodeMirror.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormSqlCodeMirror.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormSqlCodeMirror.SK_EXTEND_COMP_NAME;
  }
}
