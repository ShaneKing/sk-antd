import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKRemoteSelect from '../select/SKRemoteSelect';

export default class SKFormRemoteSelect extends FormComp {
  static SK_COMP_NAME = 'SKRemoteSelect';
  static SK_EXTEND_COMP_NAME = 'SKFormRemoteSelect';
  static defaultProps = SK.extends(true, {}, FormComp.defaultProps, SKRemoteSelect.defaultProps, {
    compTag: SKRemoteSelect,
  });
  static propTypes = SK.extends(true, {}, FormComp.propTypes, SKRemoteSelect.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormRemoteSelect.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormRemoteSelect.SK_EXTEND_COMP_NAME;
  }
}
