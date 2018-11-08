import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKDatePicker from '../date-picker/SKDatePicker';

export default class SKFormDatePicker extends FormComp {
  static SK_COMP_NAME = 'SKDatePicker';
  static SK_EXTEND_COMP_NAME = 'SKFormDatePicker';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKDatePicker.defaultProps, {
    compTag: SKDatePicker,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKDatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormDatePicker.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormDatePicker.SK_EXTEND_COMP_NAME;
  }
}
