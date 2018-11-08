import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKRangePicker from '../date-picker/SKRangePicker';

export default class SKFormRangePicker extends FormComp {
  static SK_COMP_NAME = 'SKRangePicker';
  static SK_EXTEND_COMP_NAME = 'SKFormRangePicker';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKRangePicker.defaultProps, {
    compTag: SKRangePicker,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKRangePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormRangePicker.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormRangePicker.SK_EXTEND_COMP_NAME;
  }
}
