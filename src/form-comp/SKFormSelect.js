import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKSelect from '../select/SKSelect';

export default class SKFormSelect extends FormComp {
  static SK_COMP_NAME = 'SKSelect';
  static SK_EXTEND_COMP_NAME = 'SKFormSelect';
  static defaultProps = SK.extends(true, {}, FormComp.defaultProps, SKSelect.defaultProps, {
    compTag: SKSelect,
  });
  static propTypes = SK.extends(true, {}, FormComp.propTypes, SKSelect.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormSelect.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormSelect.SK_EXTEND_COMP_NAME;
  }
}
