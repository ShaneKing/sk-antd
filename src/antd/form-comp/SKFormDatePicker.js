import { SK } from 'sk-js';
import FormComp from './FormComp';
import SKDatePicker from '../date-picker/SKDatePicker';

export default class SKFormDatePicker extends FormComp {
  static SK_COMP_NAME = 'SKFormDatePicker';
  static defaultProps = SK.assign({}, FormComp.defaultProps, SKDatePicker.defaultProps, {
    compTag: SKDatePicker,
  });
  static propTypes = SK.assign({}, FormComp.propTypes, SKDatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKFormDatePicker';
  }
}
