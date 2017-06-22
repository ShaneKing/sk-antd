import $ from 'jquery';
import SK from 'sk-js';
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
  static CURRENT_PROGRESS_COUNT = 0;
  static CURRENT_SYNC_COUNT = 0;

  static getDefaultSettings() {
    return {
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      // processData: false,
      // traditional: true,
      needStringify: true,
      progress: true,//sk extend jquery
      async: true//sk extend jquery
    }
  }
  static doAjax(settings) {
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
    try {
      return $.ajax(settings).done((data, textStatus, jqXHR) => {
        let response = new Resp(data);
        response.showResult();
      }).fail((jqXHR, textStatus, errorThrown) => {
        console.error(jqXHR);
        console.error(textStatus);
        console.error(errorThrown);
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
    } catch (e) {

    }
  }

  static doDelete(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.getDefaultSettings(), {url: url}, {data: data}, {method: Ajax.METHOD.DELETE}, options));
  }
  static doGet(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.getDefaultSettings(), {url: url}, {data: data}, {method: Ajax.METHOD.GET}, options));
  }
  static doPost(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.getDefaultSettings(), {url: url}, {data: data}, {method: Ajax.METHOD.POST}, options));
  }
  static doPut(url, data = {}, options = {}) {
    return Ajax.doAjax(SK.assign({}, Ajax.getDefaultSettings(), {url: url}, {data: data}, {method: Ajax.METHOD.PUT}, options));
  }
}
