import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKSqlCodeMirror from '../../sk/SKSqlCodeMirror';

export default class SKFormCodeMirror extends FormComp {
  static SK_COMP_NAME = 'SKSqlCodeMirror';
  static SK_EXTEND_COMP_NAME = 'SKFormSqlCodeMirror';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKSqlCodeMirror.defaultProps, {
    compTag: SKSqlCodeMirror,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKSqlCodeMirror.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormCodeMirror.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormCodeMirror.SK_EXTEND_COMP_NAME;
  }
}
