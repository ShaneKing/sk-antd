//http://www.w3school.com.cn/tags/html_ref_standardattributes.asp
import _ from 'lodash';

let HTML = {
  EVENT: {
    any: {
      /*Window*/
      'onAfterPrint': 'onAfterPrint',//H5
      'onBeforePrint': 'onBeforePrint',//H5
      'onBeforeUnload': 'onBeforeUnload',//H5
      'onError': 'onError',//H5
      'onHasChange': 'onHasChange',//H5
      'onLoad': 'onLoad',
      'onMessage': 'onMessage',//H5
      'onOffline': 'onOffline',//H5
      'onOnline': 'onOnline',//H5
      'onPageHide': 'onPageHide',//H5
      'onPageShow': 'onPageShow',//H5
      'onPopState': 'onPopState',//H5
      'onRedo': 'onRedo',//H5
      'onResize': 'onResize',//H5
      'onStorage': 'onStorage',//H5
      'onUndo': 'onUndo',//H5
      'onUnload': 'onUnload',
      /*Form*/
      'onBlur': 'onBlur',
      'onChange': 'onChange',
      'onContextMenu': 'onContextMenu',//H5
      'onFocus': 'onFocus',
      'onFormChange': 'onFormChange',//H5
      'onFormInput': 'onFormInput',//H5
      'onInput': 'onInput',//H5
      'onInvalid': 'onInvalid',//H5
      'onReset': 'onReset',
      'onSelect': 'onSelect',
      'onSubmit': 'onSubmit',
      /*Keyboard*/
      'onKeyDown': 'onKeyDown',
      'onKeyPress': 'onKeyPress',
      'onKeyUp': 'onKeyUp',
      /*Mouse*/
      'onClick': 'onClick',
      // 'onDbClick':'onDbClick',
      'onDoubleClick': 'onDoubleClick',
      'onDrag': 'onDrag',//H5
      'onDragEnd': 'onDragEnd',//H5
      'onDragEnter': 'onDragEnter',//H5
      'onDragLeave': 'onDragLeave',//H5
      'onDragOver': 'onDragOver',//H5
      'onDragStart': 'onDragStart',//H5
      'onDrop': 'onDrop',//H5
      'onMouseDown': 'onMouseDown',
      'onMouseMove': 'onMouseMove',
      'onMouseOut': 'onMouseOut',
      'onMouseOver': 'onMouseOver',
      'onMouseUp': 'onMouseUp',
      'onMouseWheel': 'onMouseWheel',//H5
      'onScroll': 'onScroll',//H5
      /*Media*/
      'onAbort': 'onAbort',
      'onCanPlay': 'onCanPlay',//H5
      'onCanPlayThrough': 'onCanPlayThrough',//H5
      'onDurationChange': 'onDurationChange',//H5
      'onEmptied': 'onEmptied',//H5
      'onEnded': 'onEnded',//H5
      // 'onError': 'onError',//H5
      'onLoadedData': 'onLoadedData',//H5
      'onLoadedMetadata': 'onLoadedMetadata',//H5
      'onLoadStart': 'onLoadStart',//H5
      'onPause': 'onPause',//H5
      'onPlay': 'onPlay',//H5
      'onPlaying': 'onPlaying',//H5
      'onProgress': 'onProgress',//H5
      'onRateChange': 'onRateChange',//H5
      'onReadyStateChange': 'onReadyStateChange',//H5
      'onSeeked': 'onSeeked',//H5
      'onSeeking': 'onSeeking',//H5
      'onStalled': 'onStalled',//H5
      'onSuspend': 'onSuspend',//H5
      'onTimeUpdate': 'onTimeUpdate',//H5
      'onVolumeChange': 'onVolumeChange',//H5
      'onWaiting': 'onWaiting'
    }
  },
  PROP: {
    any: {
      'accessKey': 'accessKey',
      // 'class':'class',
      'className': 'className',
      'contentEditable': 'contentEditable',//H5
      'contextMenu': 'contextMenu',//H5
      // 'data-*':'data-*',//H5
      'dataToggle': 'data-toggle',//H5
      'dir': 'dir',
      'draggable': 'draggable',//H5
      'dropzone': 'dropzone',//H5
      'hidden': 'hidden',//H5
      'id': 'id',
      'lang': 'lang',
      'spellCheck': 'spellCheck',//H5
      'style': 'style',
      'tabIndex': 'tabIndex',
      'title': 'title',
      'translate': 'translate'//H5
    },
    a: {
      'charSet': 'charSet',//H5!
      'coords': 'coords',//H5!
      'download': 'download',//H5
      'href': 'href',
      'hrefLang': 'hrefLang',
      'media': 'media',//H5
      'name': 'name',//H5!
      'rel': 'rel',
      'rev': 'rev',//H5!
      'shape': 'shape',//H5!
      'target': 'target',
      'type': 'type'//H5
    },
    aside: {},
    br: {},
    button: {
      'autoFocus': 'autoFocus',//H5
      'disabled': 'disabled',
      'form': 'form',//H5
      'formAction': 'formAction',//H5
      'formEncType': 'formEncType',//H5
      'formMethod': 'formMethod',//H5
      'formNoValidate': 'formNoValidate',//H5
      'formTarget': 'formTarget',//H5
      'name': 'name',
      'type': 'type',
      'value': 'value'
    },
    canvas: {},
    div: {
      'align': 'align',//!
      'style': 'style'//!
    },
    h1: {
      'align': 'align'
    },
    h2: {
      'align': 'align'
    },
    h3: {
      'align': 'align'
    },
    h4: {
      'align': 'align'
    },
    h5: {
      'align': 'align'
    },
    h6: {
      'align': 'align'
    },
    i: {},
    img: {
      'src': 'src',
      'alt': 'alt'
    },
    input: {
      'placeholder': 'placeholder',
      'readOnly': 'readOnly',
      'type': 'type',
      'value': 'value'
    },
    li: {
      'type': 'type',//!
      'value': 'value'//!
    },
    nav: {},
    ul: {
      'compact': 'compact',//!
      'type': 'type'
    },
    ol: {
      'compact': 'compact',//!
      'type': 'type'
    },
    p: {
      'align': 'align'
    },
    span: {}
  }
};

//HTML all properties
HTML.anyP = _.assign({}, HTML.EVENT.any, HTML.PROP.any);

//HTML all data-*
HTML.dataP = (props) => {
  return Object.keys(props).filter(($prop) => {
    return _.startsWith($prop, 'data-');
  })
};

export default HTML;
