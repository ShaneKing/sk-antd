import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKTextArea from '../input/SKTextArea';

export default class SKFormTextArea extends FormComp {
  static SK_COMP_NAME = 'SKFormTextArea';
  static defaultProps = SK.extend(true, {}, FormComp.defaultProps, SKTextArea.defaultProps, {
    compTag: SKTextArea,
  });
  static propTypes = SK.extend(true, {}, FormComp.propTypes, SKTextArea.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormTextArea.SK_COMP_NAME;
  }
}
