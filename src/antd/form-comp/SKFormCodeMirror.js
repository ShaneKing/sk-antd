import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKCodeMirror from '../../sk/SKCodeMirror';

export default class SKFormCodeMirror extends FormComp {
  static SK_COMP_NAME = 'SKFormCodeMirror';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKCodeMirror.defaultProps, {
    compTag: SKCodeMirror,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKCodeMirror.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormCodeMirror.SK_COMP_NAME;
  }
}
