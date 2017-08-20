import SK from 'sk-js';
import FormComp from './FormComp';
import SKDatePicker from './SKDatePicker';

export default class FormDatePicker extends FormComp {
  static defaultProps = {
    compTag: SKDatePicker
  };
  static propTypes = SK.assign({}, FormComp.propTypes, SKDatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
