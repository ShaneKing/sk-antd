# sk-antd
Let's write page like java, wrap ant-design implements mvc(Model-Validator-Component)

## Example
[CodeSandbox](https://codesandbox.io/search?refinementList%5Btags%5D%5B0%5D=sk-antd.test)

## Features
- MVC
  - Model: <https://github.com/ShaneKing/sk-js/blob/mirror/src/Model.md>
  - Validator: <https://github.com/ShaneKing/sk-js/blob/mirror/src/Validator.md>
  - Components: <https://github.com/ShaneKing/sk-antd>
- Two-way Binding
  - component --- add listener --- modelId on model
  - modelId's value change --- fireEvent -- component auto refresh
  - component event --- auto change --- modelId's value
- Component props
  - model series: skSysModel(SPA just one), skModel(even page), model(some scenario), modelId(auto two-way binding and monitor)
  - bfo(boolean/function/object) series: active, disabled, hidden, preview(Form Components), readOnly, required
    - preview: SKDatePicker, SKRangePicker, SKInput, SKTextArea, SKSelect, SKRemoteSelect, SKSwitch
  - value process series: m2nConvertor, n2mConvertor, m2vConvertor
- props trans
  - auto trans to child(without compTag,modelId,children,className) and self(without compTag,modelId)

## Components 

### focus
- no child? default has
- must models/modelId? default not must
- side-effect? auto generate id etc...
