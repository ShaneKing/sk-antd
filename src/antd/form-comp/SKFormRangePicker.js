import { SK } from 'sk-js';
import FormComp from './FormComp';
import SKRangePicker from '../date-picker/SKRangePicker';

export default class SKFormRangePicker extends FormComp {
  static SK_COMP_NAME = 'SKFormRangePicker';
  static defaultProps = SK.assign({}, FormComp.defaultProps, SKRangePicker.defaultProps, {
    compTag: SKRangePicker,
  });
  static propTypes = SK.assign({}, FormComp.propTypes, SKRangePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormRangePicker.SK_COMP_NAME;
  }
}
