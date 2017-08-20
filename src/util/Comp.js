import React from 'react';
import _ from 'lodash';
import SK from 'sk-js';
import Cfg from './Cfg';
import {Dir, SIZE} from './Const';
import HTML from './HTML';
import Model from './Model';
import REACT from './REACT';
import ReactUtil from './ReactUtil';

/**
 * props:compTag,model(skModel),modelId,labelDir(skLabelDir),labelWidth(skLabelWidth)
 * bfo  ,active(skActive),disabled(skDisabled)
 * func ,m2eConvertor,e2mConvertor,m2vConvertor,v2mConvertor
 * html ,className,role,style
 */
export default class Comp extends React.Component {
  static SK_COMP_STATE_ID_PREFIX = 'skCompStateUid';
  static SK_PROPS_PREFIX = 'sk';
  static SK_PROPS_SYS = 'sys';
  static SK_PROPS = {
    //sk
    COMP_TAG: 'compTag',
    MODEL: 'model',
    MODEL_ID: 'modelId',
    //AntD
    COL_SPAN: 'colSpan',
    COL_XS: 'colXs',
    COL_SM: 'colSm',
    COL_MD: 'colMd',
    COL_LG: 'colLg',
    COL_XL: 'colXl',
    FORM_LABEL_COL: 'formLabelCol',
    FORM_LAYOUT: 'formLayout',
    FORM_WRAPPER_COL: 'formWrapperCol',
    GRID_GUTTER: 'gridGutter',
    IN_FROM_ITEM: 'inFormItem',
    IN_FROM_ROW: 'inFormRow',
    SIZE: 'size',
    //ui state, are bfo (boolean, function, object{deps:,func:})
    //deps to monitor
    ACTIVE: 'active',
    DISABLED: 'disabled',
    HIDDEN: 'hidden',
    PREVIEW: 'preview',
    READONLY: 'readOnly',
    REQUIRED: 'required',//just paint required icon
    //component monitor list, can be string[reg], string array or object
    MONITOR: 'monitor'
  };
  static propTypes = {
    compTag: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.func,
      React.PropTypes.string
    ]),//React component or Brad Component
    model: Comp.IS_PROP_TYPES_MODEL,//Business Model(part of page), PlainObject or Brad.Model
    skModel: Comp.IS_PROP_TYPES_MODEL,//Business Model(page), PlainObject or Brad.Model
    skSysModel: Comp.IS_PROP_TYPES_MODEL,//System Model(whole of page), PlainObject or Brad.Model
    modelId: React.PropTypes.string,
    colSpan: React.PropTypes.number,
    skColSpan: React.PropTypes.number,
    colXs: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    skColXs: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    colSm: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    skColSm: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    colMd: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    skColMd: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    colLg: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    skColLg: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    colXl: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    skColXl: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.object
    ]),
    formLayout: React.PropTypes.oneOf([Dir.Horizontal, Dir.Vertical, Dir.Inline]),
    skFormLayout: React.PropTypes.oneOf([Dir.Horizontal, Dir.Vertical, Dir.Inline]),//Const.Dir
    formLabelCol: React.PropTypes.object,
    skFormLabelCol: React.PropTypes.object,
    formWrapperCol: React.PropTypes.object,
    skFormWrapperCol: React.PropTypes.object,
    gridGutter: React.PropTypes.number,
    skGridGutter: React.PropTypes.number,
    inFormItem: React.PropTypes.bool,
    skInFormItem: React.PropTypes.bool,
    inFormRow: React.PropTypes.bool,
    skInFormRow: React.PropTypes.bool,
    size: React.PropTypes.oneOf([SIZE.Large, SIZE.Default, SIZE.Small]),
    skSize: React.PropTypes.oneOf([SIZE.Large, SIZE.Default, SIZE.Small]),

    active: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    skActive: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    disabled: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    skDisabled: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    hidden: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    skHidden: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    preview: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    skPreview: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    readOnly: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    skReadOnly: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    required: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    skRequired: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
      React.PropTypes.object
    ]),
    monitor: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
      React.PropTypes.object
    ]),

    m2eConvertor: React.PropTypes.func,//Model 2 Editing
    e2mConvertor: React.PropTypes.func,//Editing 2 Model
    m2vConvertor: React.PropTypes.func,//Model 2 View, like Date Comp, moment format to view: YYYY-MM-DDTHH:mm:ss.SSSZ -> YYYY-MM-DD
    v2mConvertor: React.PropTypes.func//View 2 Model, like Check Comp, true is checked: true -> 1, false -> 0
  };

  /**
   * Assert Model
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error}
   */
  static IS_PROP_TYPES_MODEL(props, propName, componentName) {
    if (props[propName] && !(props[propName] instanceof Model)) {
      return new Error('The [' + componentName + ']\'s [' + propName + '] is not a model!');
    }
  }

  /**
   * Filter sk props
   *
   * @param {string} k key/index
   * @returns {boolean}
   */
  static skPropsFilter(k) {
    return _.startsWith(SK.s4s(k), Comp.SK_PROPS_PREFIX);
  }

  monitors = [];

  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    this.addAllChangedMonitor();
    this.addExtendChangedMonitor();
  }

  componentWillUpdate() {
    this.rmvAllChangedMonitor();
    this.rmvExtendChangedMonitor();
  }

  componentDidUpdate() {
    this.addAllChangedMonitor();
    this.addExtendChangedMonitor();
  }

  componentWillUnmount() {
    this.rmvAllChangedMonitor();
    this.rmvExtendChangedMonitor();
  }

  addExtendChangedMonitor() {

  }

  rmvExtendChangedMonitor() {

  }

  //monitor begin
  addAllChangedMonitor() {
    Model.parseSao(this.props.monitor).forEach(($i) => {
      this.addChangedMonitor($i);
    });
    //Self value monitor
    if (this.iModelId()) {
      this.addChangedMonitor(this.iModelId());
    }
  }

  addChangedMonitor(idOrReg) {
    if (!_.isNil(idOrReg)) {
      if (this.monitors.indexOf(idOrReg) < 0) {
        this.monitors.push(idOrReg);
      }
      if (_.isRegExp(idOrReg)) {
        this.iModel().addRegChangedListener(idOrReg, this.updateUI);
      } else {
        this.iModel().addIdChangedListener(idOrReg, this.updateUI);
      }
    }
  }

  rmvAllChangedMonitor() {
    this.monitors.forEach(($i) => {
      this.rmvChangedMonitor($i);
    });
  }

  rmvChangedMonitor(idOrReg) {
    if (_.isRegExp(idOrReg)) {
      this.iModel().rmvRegChangedListener(idOrReg, this.updateUI);
    } else {
      this.iModel().rmvIdChangedListener(idOrReg, this.updateUI)
    }
    this.monitors.skRmv(idOrReg);
  }

  updateUI = (evt) => {
    this.setState({stateUid: _.uniqueId(Comp.SK_COMP_STATE_ID_PREFIX)});
  };

  //monitor end

  getErrors() {
    return this.iModel().getErrors(this.iModelId());
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }

  //Properties
  /**
   * Get model if exist, else skModel
   *
   * @returns {Model}
   */
  iModel() {
    return this.skProp(Comp.SK_PROPS.MODEL);
  }

  /**
   * Get modelId: x.xx.xxx.xxxx
   *
   * @returns {string}
   */
  iModelId() {
    return this.props.modelId;
  }

  /**
   * Get skModel
   *
   * @returns {Model}
   */
  skModel() {
    return this.props.skModel;
  }

  sysModel() {
    return this.props.skSysModel;
  }

  /**
   * Get prop value: prop -> skProp -> DEFAULT_PROP
   *
   * @param {string}prop
   * @param {*} defaultValue
   * @returns {*} Maybe undefined
   */
  skProp(prop, defaultValue = undefined) {
    let rtn = this.props[prop];
    if (rtn === undefined) {
      rtn = this.props[Comp.SK_PROPS_PREFIX + SK.upperWordsFirstChar(prop)]
    }
    if (rtn === undefined) {
      rtn = this.props[Comp.SK_PROPS_PREFIX + SK.upperWordsFirstChar(Comp.SK_PROPS_SYS) + SK.upperWordsFirstChar(prop)]
    }
    if (rtn === undefined) {
      rtn = Cfg[SK.STR_DEFAULT.toUpperCase() + SK.upperWordsFirstChar(prop).replace(/[A-Z]/g, ($1) => {
        return SK.CHAR_UNDERLINE + $1;
      }).toUpperCase()]
    }
    return rtn === undefined ? defaultValue : rtn;
  }

  /**
   * set/get value for modelId
   *
   * @param {*} val
   * @returns {*}
   */
  skVal(val) {
    if (arguments.length > 0) {
      this.iModel().skVal(this.iModelId(), val);
      return this;
    } else {
      return this.iModel().skVal(this.iModelId());
    }
  }

  //Functions
  /**
   * Returns valid props for this comp
   *
   * @param {Comp|string} comp
   * @param {PlainObject} prop
   * @returns {PlainObject}
   */
  compValidProps(comp, prop) {
    comp = comp || this.props.compTag;
    prop = prop || this.props;

    let tmpProps = REACT.P.skVals();
    tmpProps = comp.propTypes ? tmpProps.concat(Object.keys(comp.propTypes)) : tmpProps;
    tmpProps = (comp.type && comp.type.propTypes) ? tmpProps.concat(Object.keys(comp.type.propTypes)) : tmpProps;

    return _.omit(_.pick(prop, tmpProps), [Comp.SK_PROPS.COMP_TAG, Comp.SK_PROPS.MODEL_ID]);
  }

  /**
   * Returns boolean value of boolean, function or object with skWhen properties
   *
   * @param {string} prop
   * @param {boolean} defaultValue
   * @returns {boolean}
   */
  skBfo(prop, defaultValue = false) {
    return this.execBfo(this.skProp(prop, defaultValue))
  }

  /**
   * Returns boolean value of boolean, function or object with skWhen properties
   *
   * @param {boolean|Function|Object} bfo
   * @param {boolean} defaultValue
   * @returns {boolean}
   */
  execBfo(bfo, defaultValue = false) {
    if (_.isBoolean(bfo)) {
      return bfo;
    } else if (_.isFunction(bfo)) {
      return bfo.call(this);
    } else if (_.isObject(bfo) && _.isFunction(bfo.func)) {
      return bfo.skWhen.call(this);
    } else {
      return defaultValue;
    }
  }

  /**
   * Transferring props to children
   *
   * child + skChildPropsTrans(child) + this.props.skFilter(false, Comp.skPropsFilter) + child.props.skFilter(false, Comp.skPropsFilter)
   *
   * @param {React.Children} children
   * @returns {React.Children}
   */
  skPropsTrans(children = undefined) {
    let skProps = this.props.skFilter(false, Comp.skPropsFilter);
    return React.Children.map(children ? children : this.props.children, child => {
      if (React.isValidElement(child)) {
        let tmpProps = (REACT.TAG[child.type] && HTML.PROP[child.type]) ? {} : skProps;
        return React.cloneElement(child, _.assign(this.childPropsTrans(child), tmpProps, child.props.skFilter(false, Comp.skPropsFilter)));
      }
      return child;
    })
  }

  /**
   * Gen props trans to children
   *
   * @param {React.Component} child
   * @returns {PlainObject}
   */
  childPropsTrans(child) {
    return {};
  }

  hasSpecialChild(specialChildName) {
    return ReactUtil.some(this.props.children, (child, idx) => {
      return child.type && child.type.name == specialChildName
    }, this);
  }
}
