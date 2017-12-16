import {message, Modal} from 'antd';
import _ from 'lodash';
import {SK} from 'sk-js';
import {Codes, I18N} from 'sk-l10n';
import ReactUtil from './Reacts';

export class RespMsg {
  static TYPE = {
    SUCCESS: 'Success',//Just prompt
    INFO: 'Info',//Just prompt
    WARNING: 'Warning',//Business continue, but must prompt
    ERROR: 'Error'//Unknown Exception(done == false), UI will prompt details; Business Stop(done == true), process by component
  };

  constructor(msg) {
    this.type = msg.type;//Message Type
    this.code = msg.code;//Message Code or Message Content
    this.args = msg.args;//Message Arguments, Array or Object, format by skFmtArr or skFmt
  }

  getMessage() {
    let key = I18N.RESP_MSG_KEY_PREFIX + this.code;
    let i18nMsg = I18N.get(key);
    let rtn = this.code;
    if (Array.isArray(this.args)) {
      rtn = i18nMsg.skFmtArr(this.args.map(arg => {
        let tmpRtn = null;
        if (_.isPlainObject(arg) && arg.code && arg.id) {
          tmpRtn = Codes.get(arg.code).find(item => {
            return item.id = arg.id
          });
          tmpRtn = tmpRtn ? tmpRtn.text : arg;
        } else {
          tmpRtn = arg;
        }
        return tmpRtn;
      }))
    } else if (_.isPlainObject(this.args) && !_.isEmpty(this.args)) {
      rtn = i18nMsg.skFmt(this.args);
    } else if (i18nMsg !== key) {
      rtn = i18nMsg;
    }
    return rtn;
  }

  getType() {
    return this.type;
  }
}

export default class Resp {
  constructor(respJsonData) {
    this.data = respJsonData.data;//Business Data
    this.done = respJsonData.done;//true: No Unknown Exception,false: has Unknown Exception
    if (_.isPlainObject(respJsonData.mesg) && !_.isEmpty(respJsonData.mesg)) {//Result Message Object, Required if done is false
      this.mesg = new RespMsg(respJsonData.mesg);
    }
  }

  feedback() {
    if (this.mesg && this.mesg.getType() && this.mesg.getMessage()) {
      if (!this.done && this.mesg.getType() === RespMsg.TYPE.ERROR) {
        Modal.error({
          title: this.mesg.getType(), content: this.mesg.getMessage(), okText: I18N.get('Return'), onOk() {
            ReactUtil.forward(SK.CHAR_SLASH);
          }
        });
      } else {
        message[_.lowerCase(this.mesg.getType())](this.mesg.getMessage());
      }
    }
  }
}
