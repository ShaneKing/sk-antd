import {Modal} from 'antd';
import $ from 'jquery';
import SK from 'sk-js';
import {I18N} from 'sk-l10n';
import NProgress from 'nprogress';
import Model from './Model';
import Resp from './Resp';

export default class Ajax {
  static METHOD = {
    DELETE: 'DELETE',
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT'
  };
  static SETTINGS = {
    contentType: 'application/json; charset=UTF-8',
    dataType: 'json',
    // processData: false,
    // traditional: true,
    failFuncs:{
      401:Ajax.fail401Func
    },
    needStringify: true,
    progress: true,//sk extend jquery
    async: true//sk extend jquery
  };
  static CURRENT_PROGRESS_COUNT = 0;
  static CURRENT_SYNC_COUNT = 0;

  static fail401Func(jqXHR, textStatus, errorThrown){
    let $Deferred = $.Deferred();
    $Deferred.reject(jqXHR, textStatus, errorThrown);
    return $Deferred;
  }

  static doAjax(settings) {
    let $Deferred = $.Deferred();
    if (settings.progress) {
      if (Ajax.CURRENT_PROGRESS_COUNT == 0) {
        NProgress.start();
      }
      Ajax.CURRENT_PROGRESS_COUNT++;
    }
    if (!settings.async) {
      if (Ajax.CURRENT_SYNC_COUNT == 0) {
        if (SK.$(Model.PROP_SYS) instanceof Model) {
          SK.$(Model.PROP_SYS).skVal('ui.spinning', true);
        }
      }
      Ajax.CURRENT_SYNC_COUNT++;
    }
    settings.data = settings.data && settings.needStringify ? JSON.stringify(settings.data) : settings.data;
    $.ajax(settings).done((data, textStatus, jqXHR) => {
      let response = new Resp(data);
      response.showResult();
      $Deferred.resolve(data, textStatus, jqXHR);
    }).fail((jqXHR, textStatus, errorThrown) => {
      console.error(jqXHR);
      console.error(textStatus);
      console.error(errorThrown);
      if(_.isFunction(Ajax.SETTINGS[jqXHR.status])){
        Ajax.SETTINGS[jqXHR.status](jqXHR, textStatus, errorThrown).done((data2, textStatus2, jqXHR2) => {
          Ajax.doAjax(settings).done((data3, textStatus3, jqXHR3) => {
            $Deferred.resolve(data3, textStatus3, jqXHR3);
          }).fail((jqXHR3, textStatus3, errorThrown3) => {
            $Deferred.reject(jqXHR3, textStatus3, errorThrown3);
          });
        }).fail((jqXHR2, textStatus2, errorThrown2) => {
          $Deferred.reject(jqXHR2, textStatus2, errorThrown2);
        });
      }else{
        Modal.error({
          title: I18N.get('System_Error'), content: errorThrown, okText: I18N.get('OK')
        });
        $Deferred.reject(jqXHR, textStatus, errorThrown);
      }
    }).always(() => {
      if (settings.progress) {
        Ajax.CURRENT_PROGRESS_COUNT--;
        if (Ajax.CURRENT_PROGRESS_COUNT == 0) {
          NProgress.done();
        } else {
          NProgress.inc();
        }
      }
      if (!settings.async) {
        Ajax.CURRENT_SYNC_COUNT--;
        if (Ajax.CURRENT_SYNC_COUNT == 0) {
          if (SK.$(Model.PROP_SYS) instanceof Model) {
            SK.$(Model.PROP_SYS).skVal('ui.spinning', false);
          }
        }
      }
    });
    return $Deferred;
  }

  static doDelete(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.SETTINGS, {url: url}, {data: data}, {method: Ajax.METHOD.DELETE}, options));
  }
  static doGet(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.SETTINGS, {url: url}, {data: data}, {method: Ajax.METHOD.GET}, options));
  }
  static doPost(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.SETTINGS, {url: url}, {data: data}, {method: Ajax.METHOD.POST}, options));
  }
  static doPut(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.SETTINGS, {url: url}, {data: data}, {method: Ajax.METHOD.PUT}, options));
  }
}
