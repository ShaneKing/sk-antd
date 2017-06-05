'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML = {
  EVENT: {
    any: {
      /*Window*/
      'onAfterPrint': 'onAfterPrint', //H5
      'onBeforePrint': 'onBeforePrint', //H5
      'onBeforeUnload': 'onBeforeUnload', //H5
      'onError': 'onError', //H5
      'onHasChange': 'onHasChange', //H5
      'onLoad': 'onLoad',
      'onMessage': 'onMessage', //H5
      'onOffline': 'onOffline', //H5
      'onOnline': 'onOnline', //H5
      'onPageHide': 'onPageHide', //H5
      'onPageShow': 'onPageShow', //H5
      'onPopState': 'onPopState', //H5
      'onRedo': 'onRedo', //H5
      'onResize': 'onResize', //H5
      'onStorage': 'onStorage', //H5
      'onUndo': 'onUndo', //H5
      'onUnload': 'onUnload',
      /*Form*/
      'onBlur': 'onBlur',
      'onChange': 'onChange',
      'onContextMenu': 'onContextMenu', //H5
      'onFocus': 'onFocus',
      'onFormChange': 'onFormChange', //H5
      'onFormInput': 'onFormInput', //H5
      'onInput': 'onInput', //H5
      'onInvalid': 'onInvalid', //H5
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
      'onDrag': 'onDrag', //H5
      'onDragEnd': 'onDragEnd', //H5
      'onDragEnter': 'onDragEnter', //H5
      'onDragLeave': 'onDragLeave', //H5
      'onDragOver': 'onDragOver', //H5
      'onDragStart': 'onDragStart', //H5
      'onDrop': 'onDrop', //H5
      'onMouseDown': 'onMouseDown',
      'onMouseMove': 'onMouseMove',
      'onMouseOut': 'onMouseOut',
      'onMouseOver': 'onMouseOver',
      'onMouseUp': 'onMouseUp',
      'onMouseWheel': 'onMouseWheel', //H5
      'onScroll': 'onScroll', //H5
      /*Media*/
      'onAbort': 'onAbort',
      'onCanPlay': 'onCanPlay', //H5
      'onCanPlayThrough': 'onCanPlayThrough', //H5
      'onDurationChange': 'onDurationChange', //H5
      'onEmptied': 'onEmptied', //H5
      'onEnded': 'onEnded', //H5
      // 'onError': 'onError',//H5
      'onLoadedData': 'onLoadedData', //H5
      'onLoadedMetadata': 'onLoadedMetadata', //H5
      'onLoadStart': 'onLoadStart', //H5
      'onPause': 'onPause', //H5
      'onPlay': 'onPlay', //H5
      'onPlaying': 'onPlaying', //H5
      'onProgress': 'onProgress', //H5
      'onRateChange': 'onRateChange', //H5
      'onReadyStateChange': 'onReadyStateChange', //H5
      'onSeeked': 'onSeeked', //H5
      'onSeeking': 'onSeeking', //H5
      'onStalled': 'onStalled', //H5
      'onSuspend': 'onSuspend', //H5
      'onTimeUpdate': 'onTimeUpdate', //H5
      'onVolumeChange': 'onVolumeChange', //H5
      'onWaiting': 'onWaiting'
    }
  },
  PROP: {
    any: {
      'accessKey': 'accessKey',
      // 'class':'class',
      'className': 'className',
      'contentEditable': 'contentEditable', //H5
      'contextMenu': 'contextMenu', //H5
      // 'data-*':'data-*',//H5
      'dataToggle': 'data-toggle', //H5
      'dir': 'dir',
      'draggable': 'draggable', //H5
      'dropzone': 'dropzone', //H5
      'hidden': 'hidden', //H5
      'id': 'id',
      'lang': 'lang',
      'spellCheck': 'spellCheck', //H5
      'style': 'style',
      'tabIndex': 'tabIndex',
      'title': 'title',
      'translate': 'translate' //H5
    },
    a: {
      'charSet': 'charSet', //H5!
      'coords': 'coords', //H5!
      'download': 'download', //H5
      'href': 'href',
      'hrefLang': 'hrefLang',
      'media': 'media', //H5
      'name': 'name', //H5!
      'rel': 'rel',
      'rev': 'rev', //H5!
      'shape': 'shape', //H5!
      'target': 'target',
      'type': 'type' //H5
    },
    aside: {},
    br: {},
    button: {
      'autoFocus': 'autoFocus', //H5
      'disabled': 'disabled',
      'form': 'form', //H5
      'formAction': 'formAction', //H5
      'formEncType': 'formEncType', //H5
      'formMethod': 'formMethod', //H5
      'formNoValidate': 'formNoValidate', //H5
      'formTarget': 'formTarget', //H5
      'name': 'name',
      'type': 'type',
      'value': 'value'
    },
    canvas: {},
    div: {
      'align': 'align', //!
      'style': 'style' //!
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
      'type': 'type', //!
      'value': 'value' //!
    },
    nav: {},
    ul: {
      'compact': 'compact', //!
      'type': 'type'
    },
    ol: {
      'compact': 'compact', //!
      'type': 'type'
    },
    p: {
      'align': 'align'
    },
    span: {}
  }
};

//HTML all properties
//http://www.w3school.com.cn/tags/html_ref_standardattributes.asp
HTML.anyP = _lodash2.default.assign({}, HTML.EVENT.any, HTML.PROP.any);

//HTML all data-*
HTML.dataP = function (props) {
  return Object.keys(props).filter(function ($prop) {
    return _lodash2.default.startsWith($prop, 'data-');
  });
};

exports.default = HTML;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0hUTUwuanMiXSwibmFtZXMiOlsiSFRNTCIsIkVWRU5UIiwiYW55IiwiUFJPUCIsImEiLCJhc2lkZSIsImJyIiwiYnV0dG9uIiwiY2FudmFzIiwiZGl2IiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaSIsImltZyIsImlucHV0IiwibGkiLCJuYXYiLCJ1bCIsIm9sIiwicCIsInNwYW4iLCJhbnlQIiwiYXNzaWduIiwiZGF0YVAiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCIkcHJvcCIsInN0YXJ0c1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPO0FBQ1RDLFNBQU87QUFDTEMsU0FBSztBQUNIO0FBQ0Esc0JBQWdCLGNBRmIsRUFFNEI7QUFDL0IsdUJBQWlCLGVBSGQsRUFHOEI7QUFDakMsd0JBQWtCLGdCQUpmLEVBSWdDO0FBQ25DLGlCQUFXLFNBTFIsRUFLa0I7QUFDckIscUJBQWUsYUFOWixFQU0wQjtBQUM3QixnQkFBVSxRQVBQO0FBUUgsbUJBQWEsV0FSVixFQVFzQjtBQUN6QixtQkFBYSxXQVRWLEVBU3NCO0FBQ3pCLGtCQUFZLFVBVlQsRUFVb0I7QUFDdkIsb0JBQWMsWUFYWCxFQVd3QjtBQUMzQixvQkFBYyxZQVpYLEVBWXdCO0FBQzNCLG9CQUFjLFlBYlgsRUFhd0I7QUFDM0IsZ0JBQVUsUUFkUCxFQWNnQjtBQUNuQixrQkFBWSxVQWZULEVBZW9CO0FBQ3ZCLG1CQUFhLFdBaEJWLEVBZ0JzQjtBQUN6QixnQkFBVSxRQWpCUCxFQWlCZ0I7QUFDbkIsa0JBQVksVUFsQlQ7QUFtQkg7QUFDQSxnQkFBVSxRQXBCUDtBQXFCSCxrQkFBWSxVQXJCVDtBQXNCSCx1QkFBaUIsZUF0QmQsRUFzQjhCO0FBQ2pDLGlCQUFXLFNBdkJSO0FBd0JILHNCQUFnQixjQXhCYixFQXdCNEI7QUFDL0IscUJBQWUsYUF6QlosRUF5QjBCO0FBQzdCLGlCQUFXLFNBMUJSLEVBMEJrQjtBQUNy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RUFBVCxFQUFhMUIsS0FBS0MsS0FBTCxDQUFXQyxHQUF4QixFQUE2QkYsS0FBS0csSUFBTCxDQUFVRCxHQUF2QyxDQUFaOztBQUVBO0FBQ0FGLEtBQUsyQixLQUFMLEdBQWEsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQU9DLE9BQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQkcsTUFBbkIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDLFdBQU8saUJBQUVDLFVBQUYsQ0FBYUQsS0FBYixFQUFvQixPQUFwQixDQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRDs7a0JBTWVoQyxJIiwiZmlsZSI6InV0aWxzL0hUTUwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHA6Ly93d3cudzNzY2hvb2wuY29tLmNuL3RhZ3MvaHRtbF9yZWZfc3RhbmRhcmRhdHRyaWJ1dGVzLmFzcFxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxubGV0IEhUTUwgPSB7XG4gIEVWRU5UOiB7XG4gICAgYW55OiB7XG4gICAgICAvKldpbmRvdyovXG4gICAgICAnb25BZnRlclByaW50JzogJ29uQWZ0ZXJQcmludCcsLy9INVxuICAgICAgJ29uQmVmb3JlUHJpbnQnOiAnb25CZWZvcmVQcmludCcsLy9INVxuICAgICAgJ29uQmVmb3JlVW5sb2FkJzogJ29uQmVmb3JlVW5sb2FkJywvL0g1XG4gICAgICAnb25FcnJvcic6ICdvbkVycm9yJywvL0g1XG4gICAgICAnb25IYXNDaGFuZ2UnOiAnb25IYXNDaGFuZ2UnLC8vSDVcbiAgICAgICdvbkxvYWQnOiAnb25Mb2FkJyxcbiAgICAgICdvbk1lc3NhZ2UnOiAnb25NZXNzYWdlJywvL0g1XG4gICAgICAnb25PZmZsaW5lJzogJ29uT2ZmbGluZScsLy9INVxuICAgICAgJ29uT25saW5lJzogJ29uT25saW5lJywvL0g1XG4gICAgICAnb25QYWdlSGlkZSc6ICdvblBhZ2VIaWRlJywvL0g1XG4gICAgICAnb25QYWdlU2hvdyc6ICdvblBhZ2VTaG93JywvL0g1XG4gICAgICAnb25Qb3BTdGF0ZSc6ICdvblBvcFN0YXRlJywvL0g1XG4gICAgICAnb25SZWRvJzogJ29uUmVkbycsLy9INVxuICAgICAgJ29uUmVzaXplJzogJ29uUmVzaXplJywvL0g1XG4gICAgICAnb25TdG9yYWdlJzogJ29uU3RvcmFnZScsLy9INVxuICAgICAgJ29uVW5kbyc6ICdvblVuZG8nLC8vSDVcbiAgICAgICdvblVubG9hZCc6ICdvblVubG9hZCcsXG4gICAgICAvKkZvcm0qL1xuICAgICAgJ29uQmx1cic6ICdvbkJsdXInLFxuICAgICAgJ29uQ2hhbmdlJzogJ29uQ2hhbmdlJyxcbiAgICAgICdvbkNvbnRleHRNZW51JzogJ29uQ29udGV4dE1lbnUnLC8vSDVcbiAgICAgICdvbkZvY3VzJzogJ29uRm9jdXMnLFxuICAgICAgJ29uRm9ybUNoYW5nZSc6ICdvbkZvcm1DaGFuZ2UnLC8vSDVcbiAgICAgICdvbkZvcm1JbnB1dCc6ICdvbkZvcm1JbnB1dCcsLy9INVxuICAgICAgJ29uSW5wdXQnOiAnb25JbnB1dCcsLy9INVxuICAgICAgJ29uSW52YWxpZCc6ICdvbkludmFsaWQnLC8vSDVcbiAgICAgICdvblJlc2V0JzogJ29uUmVzZXQnLFxuICAgICAgJ29uU2VsZWN0JzogJ29uU2VsZWN0JyxcbiAgICAgICdvblN1Ym1pdCc6ICdvblN1Ym1pdCcsXG4gICAgICAvKktleWJvYXJkKi9cbiAgICAgICdvbktleURvd24nOiAnb25LZXlEb3duJyxcbiAgICAgICdvbktleVByZXNzJzogJ29uS2V5UHJlc3MnLFxuICAgICAgJ29uS2V5VXAnOiAnb25LZXlVcCcsXG4gICAgICAvKk1vdXNlKi9cbiAgICAgICdvbkNsaWNrJzogJ29uQ2xpY2snLFxuICAgICAgLy8gJ29uRGJDbGljayc6J29uRGJDbGljaycsXG4gICAgICAnb25Eb3VibGVDbGljayc6ICdvbkRvdWJsZUNsaWNrJyxcbiAgICAgICdvbkRyYWcnOiAnb25EcmFnJywvL0g1XG4gICAgICAnb25EcmFnRW5kJzogJ29uRHJhZ0VuZCcsLy9INVxuICAgICAgJ29uRHJhZ0VudGVyJzogJ29uRHJhZ0VudGVyJywvL0g1XG4gICAgICAnb25EcmFnTGVhdmUnOiAnb25EcmFnTGVhdmUnLC8vSDVcbiAgICAgICdvbkRyYWdPdmVyJzogJ29uRHJhZ092ZXInLC8vSDVcbiAgICAgICdvbkRyYWdTdGFydCc6ICdvbkRyYWdTdGFydCcsLy9INVxuICAgICAgJ29uRHJvcCc6ICdvbkRyb3AnLC8vSDVcbiAgICAgICdvbk1vdXNlRG93bic6ICdvbk1vdXNlRG93bicsXG4gICAgICAnb25Nb3VzZU1vdmUnOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgJ29uTW91c2VPdXQnOiAnb25Nb3VzZU91dCcsXG4gICAgICAnb25Nb3VzZU92ZXInOiAnb25Nb3VzZU92ZXInLFxuICAgICAgJ29uTW91c2VVcCc6ICdvbk1vdXNlVXAnLFxuICAgICAgJ29uTW91c2VXaGVlbCc6ICdvbk1vdXNlV2hlZWwnLC8vSDVcbiAgICAgICdvblNjcm9sbCc6ICdvblNjcm9sbCcsLy9INVxuICAgICAgLypNZWRpYSovXG4gICAgICAnb25BYm9ydCc6ICdvbkFib3J0JyxcbiAgICAgICdvbkNhblBsYXknOiAnb25DYW5QbGF5JywvL0g1XG4gICAgICAnb25DYW5QbGF5VGhyb3VnaCc6ICdvbkNhblBsYXlUaHJvdWdoJywvL0g1XG4gICAgICAnb25EdXJhdGlvbkNoYW5nZSc6ICdvbkR1cmF0aW9uQ2hhbmdlJywvL0g1XG4gICAgICAnb25FbXB0aWVkJzogJ29uRW1wdGllZCcsLy9INVxuICAgICAgJ29uRW5kZWQnOiAnb25FbmRlZCcsLy9INVxuICAgICAgLy8gJ29uRXJyb3InOiAnb25FcnJvcicsLy9INVxuICAgICAgJ29uTG9hZGVkRGF0YSc6ICdvbkxvYWRlZERhdGEnLC8vSDVcbiAgICAgICdvbkxvYWRlZE1ldGFkYXRhJzogJ29uTG9hZGVkTWV0YWRhdGEnLC8vSDVcbiAgICAgICdvbkxvYWRTdGFydCc6ICdvbkxvYWRTdGFydCcsLy9INVxuICAgICAgJ29uUGF1c2UnOiAnb25QYXVzZScsLy9INVxuICAgICAgJ29uUGxheSc6ICdvblBsYXknLC8vSDVcbiAgICAgICdvblBsYXlpbmcnOiAnb25QbGF5aW5nJywvL0g1XG4gICAgICAnb25Qcm9ncmVzcyc6ICdvblByb2dyZXNzJywvL0g1XG4gICAgICAnb25SYXRlQ2hhbmdlJzogJ29uUmF0ZUNoYW5nZScsLy9INVxuICAgICAgJ29uUmVhZHlTdGF0ZUNoYW5nZSc6ICdvblJlYWR5U3RhdGVDaGFuZ2UnLC8vSDVcbiAgICAgICdvblNlZWtlZCc6ICdvblNlZWtlZCcsLy9INVxuICAgICAgJ29uU2Vla2luZyc6ICdvblNlZWtpbmcnLC8vSDVcbiAgICAgICdvblN0YWxsZWQnOiAnb25TdGFsbGVkJywvL0g1XG4gICAgICAnb25TdXNwZW5kJzogJ29uU3VzcGVuZCcsLy9INVxuICAgICAgJ29uVGltZVVwZGF0ZSc6ICdvblRpbWVVcGRhdGUnLC8vSDVcbiAgICAgICdvblZvbHVtZUNoYW5nZSc6ICdvblZvbHVtZUNoYW5nZScsLy9INVxuICAgICAgJ29uV2FpdGluZyc6ICdvbldhaXRpbmcnXG4gICAgfVxuICB9LFxuICBQUk9QOiB7XG4gICAgYW55OiB7XG4gICAgICAnYWNjZXNzS2V5JzogJ2FjY2Vzc0tleScsXG4gICAgICAvLyAnY2xhc3MnOidjbGFzcycsXG4gICAgICAnY2xhc3NOYW1lJzogJ2NsYXNzTmFtZScsXG4gICAgICAnY29udGVudEVkaXRhYmxlJzogJ2NvbnRlbnRFZGl0YWJsZScsLy9INVxuICAgICAgJ2NvbnRleHRNZW51JzogJ2NvbnRleHRNZW51JywvL0g1XG4gICAgICAvLyAnZGF0YS0qJzonZGF0YS0qJywvL0g1XG4gICAgICAnZGF0YVRvZ2dsZSc6ICdkYXRhLXRvZ2dsZScsLy9INVxuICAgICAgJ2Rpcic6ICdkaXInLFxuICAgICAgJ2RyYWdnYWJsZSc6ICdkcmFnZ2FibGUnLC8vSDVcbiAgICAgICdkcm9wem9uZSc6ICdkcm9wem9uZScsLy9INVxuICAgICAgJ2hpZGRlbic6ICdoaWRkZW4nLC8vSDVcbiAgICAgICdpZCc6ICdpZCcsXG4gICAgICAnbGFuZyc6ICdsYW5nJyxcbiAgICAgICdzcGVsbENoZWNrJzogJ3NwZWxsQ2hlY2snLC8vSDVcbiAgICAgICdzdHlsZSc6ICdzdHlsZScsXG4gICAgICAndGFiSW5kZXgnOiAndGFiSW5kZXgnLFxuICAgICAgJ3RpdGxlJzogJ3RpdGxlJyxcbiAgICAgICd0cmFuc2xhdGUnOiAndHJhbnNsYXRlJy8vSDVcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgICdjaGFyU2V0JzogJ2NoYXJTZXQnLC8vSDUhXG4gICAgICAnY29vcmRzJzogJ2Nvb3JkcycsLy9INSFcbiAgICAgICdkb3dubG9hZCc6ICdkb3dubG9hZCcsLy9INVxuICAgICAgJ2hyZWYnOiAnaHJlZicsXG4gICAgICAnaHJlZkxhbmcnOiAnaHJlZkxhbmcnLFxuICAgICAgJ21lZGlhJzogJ21lZGlhJywvL0g1XG4gICAgICAnbmFtZSc6ICduYW1lJywvL0g1IVxuICAgICAgJ3JlbCc6ICdyZWwnLFxuICAgICAgJ3Jldic6ICdyZXYnLC8vSDUhXG4gICAgICAnc2hhcGUnOiAnc2hhcGUnLC8vSDUhXG4gICAgICAndGFyZ2V0JzogJ3RhcmdldCcsXG4gICAgICAndHlwZSc6ICd0eXBlJy8vSDVcbiAgICB9LFxuICAgIGFzaWRlOiB7fSxcbiAgICBicjoge30sXG4gICAgYnV0dG9uOiB7XG4gICAgICAnYXV0b0ZvY3VzJzogJ2F1dG9Gb2N1cycsLy9INVxuICAgICAgJ2Rpc2FibGVkJzogJ2Rpc2FibGVkJyxcbiAgICAgICdmb3JtJzogJ2Zvcm0nLC8vSDVcbiAgICAgICdmb3JtQWN0aW9uJzogJ2Zvcm1BY3Rpb24nLC8vSDVcbiAgICAgICdmb3JtRW5jVHlwZSc6ICdmb3JtRW5jVHlwZScsLy9INVxuICAgICAgJ2Zvcm1NZXRob2QnOiAnZm9ybU1ldGhvZCcsLy9INVxuICAgICAgJ2Zvcm1Ob1ZhbGlkYXRlJzogJ2Zvcm1Ob1ZhbGlkYXRlJywvL0g1XG4gICAgICAnZm9ybVRhcmdldCc6ICdmb3JtVGFyZ2V0JywvL0g1XG4gICAgICAnbmFtZSc6ICduYW1lJyxcbiAgICAgICd0eXBlJzogJ3R5cGUnLFxuICAgICAgJ3ZhbHVlJzogJ3ZhbHVlJ1xuICAgIH0sXG4gICAgY2FudmFzOiB7fSxcbiAgICBkaXY6IHtcbiAgICAgICdhbGlnbic6ICdhbGlnbicsLy8hXG4gICAgICAnc3R5bGUnOiAnc3R5bGUnLy8hXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgJ2FsaWduJzogJ2FsaWduJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICdhbGlnbic6ICdhbGlnbidcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICAnYWxpZ24nOiAnYWxpZ24nXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgJ2FsaWduJzogJ2FsaWduJ1xuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgICdhbGlnbic6ICdhbGlnbidcbiAgICB9LFxuICAgIGg2OiB7XG4gICAgICAnYWxpZ24nOiAnYWxpZ24nXG4gICAgfSxcbiAgICBpOiB7fSxcbiAgICBpbWc6IHtcbiAgICAgICdzcmMnOiAnc3JjJyxcbiAgICAgICdhbHQnOiAnYWx0J1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICdwbGFjZWhvbGRlcic6ICdwbGFjZWhvbGRlcicsXG4gICAgICAncmVhZE9ubHknOiAncmVhZE9ubHknLFxuICAgICAgJ3R5cGUnOiAndHlwZScsXG4gICAgICAndmFsdWUnOiAndmFsdWUnXG4gICAgfSxcbiAgICBsaToge1xuICAgICAgJ3R5cGUnOiAndHlwZScsLy8hXG4gICAgICAndmFsdWUnOiAndmFsdWUnLy8hXG4gICAgfSxcbiAgICBuYXY6IHt9LFxuICAgIHVsOiB7XG4gICAgICAnY29tcGFjdCc6ICdjb21wYWN0JywvLyFcbiAgICAgICd0eXBlJzogJ3R5cGUnXG4gICAgfSxcbiAgICBvbDoge1xuICAgICAgJ2NvbXBhY3QnOiAnY29tcGFjdCcsLy8hXG4gICAgICAndHlwZSc6ICd0eXBlJ1xuICAgIH0sXG4gICAgcDoge1xuICAgICAgJ2FsaWduJzogJ2FsaWduJ1xuICAgIH0sXG4gICAgc3Bhbjoge31cbiAgfVxufTtcblxuLy9IVE1MIGFsbCBwcm9wZXJ0aWVzXG5IVE1MLmFueVAgPSBfLmFzc2lnbih7fSwgSFRNTC5FVkVOVC5hbnksIEhUTUwuUFJPUC5hbnkpO1xuXG4vL0hUTUwgYWxsIGRhdGEtKlxuSFRNTC5kYXRhUCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcigoJHByb3ApID0+IHtcbiAgICByZXR1cm4gXy5zdGFydHNXaXRoKCRwcm9wLCAnZGF0YS0nKTtcbiAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUw7XG4iXX0=