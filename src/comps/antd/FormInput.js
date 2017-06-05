import SK from 'sk-js';
import FormComp from './FormComp';
import SKInput from './SKInput';

export default class FormInput extends FormComp {
  static defaultProps = {
    compTag: SKInput
  };
  static propTypes = SK.assign({}, FormComp.propTypes, SKInput.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
