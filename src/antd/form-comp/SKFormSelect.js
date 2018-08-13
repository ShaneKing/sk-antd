import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKSelect from '../select/SKSelect';

export default class SKFormSelect extends FormComp {
  static SK_COMP_NAME = 'SKFormSelect';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKSelect.defaultProps, {
    compTag: SKSelect,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKSelect.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormSelect.SK_COMP_NAME;
  }
}
