import {message, Modal, notification} from 'antd';
import _ from 'lodash';
import {Codes, I18N} from 'sk-l10n';
import Path from './Path';

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

  getType() {
    return this.type;
  }

  getMessage() {
    let key = 'Resp.' + this.code;
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
    } else if (i18nMsg != key) {
      rtn = i18nMsg;
    }
    return rtn;
  }
}

export default class Resp {
  constructor(respJsonData) {
    this.data = respJsonData.data;//Business Data
    this.done = respJsonData.done;//true: No Unknown Exception,false: has Unknown Exception
    if (_.isPlainObject(respJsonData.rslt) && !_.isEmpty(respJsonData.rslt)) {//Result Message Object, Required if done is false
      this.rslt = new RespMsg(respJsonData.rslt);
    }
    if (Array.isArray(respJsonData.ntfs) && !_.isEmpty(respJsonData.ntfs)) {//Notifications Array
      this.ntfs = respJsonData.ntfs.map(ntf => {
        return new RespMsg(ntf);
      });
    }
  }

  showNotifications() {
    if (this.ntfs) {
      this.ntfs.forEach(($respMsg) => {
        if ($respMsg instanceof RespMsg) {
          if ($respMsg.getType() && $respMsg.getMessage()) {
            notification[_.lowerCase($respMsg.getType())]({message: $respMsg.getType(), description: $respMsg.getMessage()});
          }
        }
      });
    }
  }

  showResult() {
    if (this.rslt && this.rslt.getType() && this.rslt.getMessage()) {
      if (!this.done && this.rslt.getType() == RespMsg.TYPE.ERROR) {
        Modal.error({
          title: this.rslt.getType(), content: this.rslt.getMessage(), okText: I18N.get('Return'), onOk() {
            Path.forward('/');
          }
        });
      } else {
        message[_.lowerCase(this.rslt.getType())](this.rslt.getMessage());
      }
    }
  }
}
