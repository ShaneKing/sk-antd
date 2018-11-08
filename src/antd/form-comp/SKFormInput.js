import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKInput from '../input/SKInput';

export default class SKFormInput extends FormComp {
  static SK_COMP_NAME = 'SKInput';
  static SK_EXTEND_COMP_NAME = 'SKFormInput';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKInput.defaultProps, {
    compTag: SKInput,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKInput.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormInput.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormInput.SK_EXTEND_COMP_NAME;
  }
}
