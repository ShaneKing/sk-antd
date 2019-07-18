import { SK } from 'sk-js';
import FormComp from './FormComp';
import SKTextArea from '../input/SKTextArea';

export default class SKFormTextArea extends FormComp {
  static SK_COMP_NAME = 'SKTextArea';
  static SK_EXTEND_COMP_NAME = 'SKFormTextArea';
  static defaultProps = SK.extends(true, {}, FormComp.defaultProps, SKTextArea.defaultProps, {
    compTag: SKTextArea,
  });
  static propTypes = SK.extends(true, {}, FormComp.propTypes, SKTextArea.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormTextArea.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKFormTextArea.SK_EXTEND_COMP_NAME;
  }
}
