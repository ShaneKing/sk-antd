import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKInputGroup from '../input/SKInputGroup';

export default class SKFormInputGroup extends FormComp {
  static SK_COMP_NAME = 'SKInputGroup';
  static SK_EXTEND_COMP_NAME = 'SKFormInputGroup';
  static defaultProps = SK.extends(true, {}, FormComp.defaultProps, SKInputGroup.defaultProps, {
    compTag: SKInputGroup,
  });
  static propTypes = SK.extends(true, {}, FormComp.propTypes, SKInputGroup.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormInputGroup.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormInputGroup.SK_EXTEND_COMP_NAME;
  }
}
