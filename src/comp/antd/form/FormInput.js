import {SK} from 'sk-js';
import FormComp from './FormComp';
import SKInput from '../input/SKInput';

export default class FormInput extends FormComp {
  static defaultProps = SK.assign({}, FormComp.defaultProps, SKInput.defaultProps, {
    compTag: SKInput
  });
  static propTypes = SK.assign({}, FormComp.propTypes, SKInput.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'FormInput';
  }
}
