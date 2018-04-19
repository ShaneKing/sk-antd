import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Model, SK} from 'sk-js';
import Reacts from './Reacts';

/*eslint react/require-default-props: "off"*/
/*eslint react/sort-comp: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint react/no-unused-state: "off"*/

/**
 * props:compTag,model(skModel),modelId
 * bfo  ,active(skActive),disabled(skDisabled)
 * func ,m2eConvertor,e2mConvertor,m2vConvertor,v2mConvertor
 * html ,className,role,style
 */
export default class Comp extends React.Component {
  static SK_COMP_NAME = 'Comp';
  static SK_COMP_STATE_ID_PREFIX = 'skCompStateUid';
  static SK_PROPS_PREFIX = 'sk';
  static SK_PROPS_SYS = 'sys';
  static SK_PROPS = {
    //sk
    COMP_TAG: 'compTag',
    MODEL: 'model',
    MODEL_ID: 'modelId',
    //ui state, are bfo (boolean, function, object{deps:,func:})
    //deps to monitor
    ACTIVE: 'active',
    DISABLED: 'disabled',
    HIDDEN: 'hidden',
    PREVIEW: 'preview',
    READ_ONLY: 'readOnly',
    REQUIRED: 'required', //just paint required icon
    //component monitor list, can be string[reg], string array or object
    MONITOR: 'monitor',
  };
  static defaultProps = {};
  static propTypes = {
    compTag: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.string,
    ]),
    skModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(page), PlainObject
    skSysModel: Comp.IS_PROP_TYPES_MODEL, //System Model(whole of page), PlainObject
    model: Comp.IS_PROP_TYPES_MODEL, //Business Model(part of page), PlainObject
    modelId: PropTypes.string,
    monitor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]), //monitor is string[reg], array[string] or object of modelId

    active: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    skActive: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    skDisabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    hidden: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    skHidden: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    preview: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    skPreview: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    readOnly: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    skReadOnly: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    required: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),
    skRequired: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
      PropTypes.object,
    ]),

    m2eConvertor: PropTypes.func, //Model 2 Editing
    e2mConvertor: PropTypes.func, //Editing 2 Model
    m2vConvertor: PropTypes.func, //Model 2 View, like Date Comp, moment format to view: YYYY-MM-DDTHH:mm:ss.SSSZ -> YYYY-MM-DD
    v2mConvertor: PropTypes.func, //View 2 Model, like Check Comp, true is checked: true -> 1, false -> 0
  };

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = Comp.SK_COMP_NAME;
    this.monitors = [];
    this.updateUI = (evt) => {
      this.setState({stateUid: _.uniqueId(Comp.SK_COMP_STATE_ID_PREFIX)});
    };
  }

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
      return new Error(`The [${componentName}]'s [${propName}] is not a model!`);
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

  componentDidMount() {
    //super.componentDidMount();
    this.addAllChangedMonitor();
    this.addExtendChangedMonitor();
  }

  componentWillUpdate() {
    this.rmvAllChangedMonitor();
    this.rmvExtendChangedMonitor();
    //super.componentWillUpdate();
  }

  componentDidUpdate() {
    //super.componentDidUpdate();
    this.addAllChangedMonitor();
    this.addExtendChangedMonitor();
  }

  componentWillUnmount() {
    this.rmvAllChangedMonitor();
    this.rmvExtendChangedMonitor();
    //super.componentWillUnmount();
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
    if (this.getModelId()) {
      this.addChangedMonitor(this.getModelId());
    }
  }

  addChangedMonitor(idOrReg) {
    if (!_.isNil(idOrReg)) {
      if (this.monitors.indexOf(idOrReg) < 0) {
        this.monitors.push(idOrReg);
      }
      if (_.isRegExp(idOrReg)) {
        this.skModel().addRegChangedListener(idOrReg, this.updateUI);
      } else {
        this.skModel().addIdChangedListener(idOrReg, this.updateUI);
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
      this.skModel().rmvRegChangedListener(idOrReg, this.updateUI);
    } else {
      this.skModel().rmvIdChangedListener(idOrReg, this.updateUI);
    }
    this.monitors.skRmv(idOrReg);
  }

  //monitor end

  /**
   * @param {React.Component} child
   * @returns {Function}
   */
  allowTransProps2Child(child) {
    return [];
  }

  allowTransProps2Self(comp = this.props.compTag, prop = this.props) {
    return [];
  }

  denyTransProps2Child(child) {
    return [];
  }

  denyTransProps2Self(comp = this.props.compTag, prop = this.props) {
    return [];
  }

  /**
   * Returns boolean value of boolean, function or object with skWhen properties
   *
   * @param {boolean|function|object} bfo
   * @param {boolean} defaultValue
   * @returns {boolean}
   */
  execBfo(bfo, defaultValue = false) {
    if (_.isBoolean(bfo)) {
      return bfo;
    } else if (_.isFunction(bfo)) {
      return bfo.call(this);
    } else if (_.isObject(bfo) && _.isFunction(bfo.func)) {
      return bfo.func.call(this);
    } else {
      return defaultValue;
    }
  }

  getErrors() {
    return this.skModel().getErrors(this.getModelId());
  }

  /**
   * Get modelId: x.xx.xxx
   *
   * @returns {string}
   */
  getModelId() {
    return this.props.modelId;
  }

  getSysModel() {
    return this.props.skSysModel;
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }

  /**
   * @see Comp.execBfo
   */
  skBfo(prop, defaultValue = false) {
    return this.execBfo(this.skProp(prop, defaultValue));
  }

  /**
   * Get model if exist, else skModel
   *
   * @returns {Model}
   */
  skModel() {
    return this.skProp(Comp.SK_PROPS.MODEL);
  }

  /**
   * Get prop value: prop -> skProp -> DEFAULT.PROP
   *
   * @param {string}prop
   * @param {*} defaultValue
   * @returns {*} Maybe undefined
   */
  skProp(prop, defaultValue = undefined) {
    let rtn = this.props[prop];
    if (rtn === undefined) {
      rtn = this.props[Comp.SK_PROPS_PREFIX + SK.upperWordsFirstChar(prop)];
    }
    if (rtn === undefined) {
      rtn = this.props[Comp.SK_PROPS_PREFIX + SK.upperWordsFirstChar(Comp.SK_PROPS_SYS) + SK.upperWordsFirstChar(prop)];
    }
    return rtn === undefined ? defaultValue : rtn;
  }

  /**
   * Transferring props to children
   *
   * @param {React.Children} children
   * @returns {React.Children}
   */
  skTransProps2Child(children = undefined) {
    const skProps = Object.keys(this.props.skFilter(false, Comp.skPropsFilter));
    return React.Children.map(children || this.props.children, child => {
      if (React.isValidElement(child)) {
        let allowProps = skProps;
        allowProps = Reacts.TAG[child.type] ? [] : allowProps;
        allowProps = allowProps.concat(this.allowTransProps2Child(child));

        let denyProps = [Comp.SK_PROPS.COMP_TAG, Comp.SK_PROPS.MODEL_ID, 'children', 'className'];
        denyProps = child.props ? denyProps.concat(Object.keys(child.props)) : denyProps;
        denyProps = denyProps.concat(this.denyTransProps2Child(child));

        return React.cloneElement(child, _.omit(_.pick(this.props, allowProps), denyProps));
      }
      return child;
    });
  }

  /**
   * Valid props for this comp
   *
   * @param {Comp|string} comp
   * @param {object} prop
   * @param {boolean} htmlProps
   * @returns {object}
   */
  skTransProps2Self(comp = this.props.compTag, prop = this.props, htmlProps = true) {
    let allowProps = htmlProps ? Reacts.P.skVals() : [];
    if (comp.name && this.SK_COMP_NAME && (Comp.SK_PROPS_PREFIX.toUpperCase() + comp.name) === this.SK_COMP_NAME) {
      //SK COMP to AntD
      allowProps = allowProps.concat(Object.keys(comp.propTypes));
    }
    if (comp.name && this.SK_COMP_NAME && _.startsWith(SK.s4s(comp.name), Comp.SK_PROPS_PREFIX.toUpperCase()) && _.startsWith(SK.s4s(this.SK_COMP_NAME), Comp.SK_PROPS_PREFIX.toUpperCase()) && ('Form' + comp.name.substring(2)) === this.SK_COMP_NAME.substring(2)) {
      //SKFormInput to SKInput
      allowProps = allowProps.concat(Object.keys(comp.propTypes));
    }
    allowProps = comp.SK_COMP_NAME ? allowProps.concat(Object.keys(prop.skFilter(false, Comp.skPropsFilter))) : allowProps;
    allowProps = allowProps.concat(this.allowTransProps2Self(comp, prop));

    let denyProps = [Comp.SK_PROPS.COMP_TAG, Comp.SK_PROPS.MODEL_ID];
    denyProps = denyProps.concat(this.denyTransProps2Self(comp, prop));

    return _.omit(_.pick(prop, allowProps), denyProps);
  }

  /**
   * set/get value for modelId
   *
   * @param {*} val
   * @returns {*}
   */
  skVal(val) {
    if (arguments.length > 0) {
      this.skModel().skVal(this.getModelId(), val);
      return this;
    } else {
      return this.skModel().skVal(this.getModelId());
    }
  }
}
