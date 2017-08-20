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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvSFRNTC5qcyJdLCJuYW1lcyI6WyJIVE1MIiwiRVZFTlQiLCJhbnkiLCJQUk9QIiwiYSIsImFzaWRlIiwiYnIiLCJidXR0b24iLCJjYW52YXMiLCJkaXYiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJpIiwiaW1nIiwiaW5wdXQiLCJsaSIsIm5hdiIsInVsIiwib2wiLCJwIiwic3BhbiIsImFueVAiLCJhc3NpZ24iLCJkYXRhUCIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsIiRwcm9wIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLE9BQU87QUFDVEMsU0FBTztBQUNMQyxTQUFLO0FBQ0g7QUFDQSxzQkFBZ0IsY0FGYixFQUU0QjtBQUMvQix1QkFBaUIsZUFIZCxFQUc4QjtBQUNqQyx3QkFBa0IsZ0JBSmYsRUFJZ0M7QUFDbkMsaUJBQVcsU0FMUixFQUtrQjtBQUNyQixxQkFBZSxhQU5aLEVBTTBCO0FBQzdCLGdCQUFVLFFBUFA7QUFRSCxtQkFBYSxXQVJWLEVBUXNCO0FBQ3pCLG1CQUFhLFdBVFYsRUFTc0I7QUFDekIsa0JBQVksVUFWVCxFQVVvQjtBQUN2QixvQkFBYyxZQVhYLEVBV3dCO0FBQzNCLG9CQUFjLFlBWlgsRUFZd0I7QUFDM0Isb0JBQWMsWUFiWCxFQWF3QjtBQUMzQixnQkFBVSxRQWRQLEVBY2dCO0FBQ25CLGtCQUFZLFVBZlQsRUFlb0I7QUFDdkIsbUJBQWEsV0FoQlYsRUFnQnNCO0FBQ3pCLGdCQUFVLFFBakJQLEVBaUJnQjtBQUNuQixrQkFBWSxVQWxCVDtBQW1CSDtBQUNBLGdCQUFVLFFBcEJQO0FBcUJILGtCQUFZLFVBckJUO0FBc0JILHVCQUFpQixlQXRCZCxFQXNCOEI7QUFDakMsaUJBQVcsU0F2QlI7QUF3Qkgsc0JBQWdCLGNBeEJiLEVBd0I0QjtBQUMvQixxQkFBZSxhQXpCWixFQXlCMEI7QUFDN0IsaUJBQVcsU0ExQlIsRUEwQmtCO0FBQ3JC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QUFULEVBQWExQixLQUFLQyxLQUFMLENBQVdDLEdBQXhCLEVBQTZCRixLQUFLRyxJQUFMLENBQVVELEdBQXZDLENBQVo7O0FBRUE7QUFDQUYsS0FBSzJCLEtBQUwsR0FBYSxVQUFDQyxLQUFELEVBQVc7QUFDdEIsU0FBT0MsT0FBT0MsSUFBUCxDQUFZRixLQUFaLEVBQW1CRyxNQUFuQixDQUEwQixVQUFDQyxLQUFELEVBQVc7QUFDMUMsV0FBTyxpQkFBRUMsVUFBRixDQUFhRCxLQUFiLEVBQW9CLE9BQXBCLENBQVA7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUpEOztrQkFNZWhDLEkiLCJmaWxlIjoidXRpbC9IVE1MLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9odHRwOi8vd3d3Lnczc2Nob29sLmNvbS5jbi90YWdzL2h0bWxfcmVmX3N0YW5kYXJkYXR0cmlidXRlcy5hc3BcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmxldCBIVE1MID0ge1xuICBFVkVOVDoge1xuICAgIGFueToge1xuICAgICAgLypXaW5kb3cqL1xuICAgICAgJ29uQWZ0ZXJQcmludCc6ICdvbkFmdGVyUHJpbnQnLC8vSDVcbiAgICAgICdvbkJlZm9yZVByaW50JzogJ29uQmVmb3JlUHJpbnQnLC8vSDVcbiAgICAgICdvbkJlZm9yZVVubG9hZCc6ICdvbkJlZm9yZVVubG9hZCcsLy9INVxuICAgICAgJ29uRXJyb3InOiAnb25FcnJvcicsLy9INVxuICAgICAgJ29uSGFzQ2hhbmdlJzogJ29uSGFzQ2hhbmdlJywvL0g1XG4gICAgICAnb25Mb2FkJzogJ29uTG9hZCcsXG4gICAgICAnb25NZXNzYWdlJzogJ29uTWVzc2FnZScsLy9INVxuICAgICAgJ29uT2ZmbGluZSc6ICdvbk9mZmxpbmUnLC8vSDVcbiAgICAgICdvbk9ubGluZSc6ICdvbk9ubGluZScsLy9INVxuICAgICAgJ29uUGFnZUhpZGUnOiAnb25QYWdlSGlkZScsLy9INVxuICAgICAgJ29uUGFnZVNob3cnOiAnb25QYWdlU2hvdycsLy9INVxuICAgICAgJ29uUG9wU3RhdGUnOiAnb25Qb3BTdGF0ZScsLy9INVxuICAgICAgJ29uUmVkbyc6ICdvblJlZG8nLC8vSDVcbiAgICAgICdvblJlc2l6ZSc6ICdvblJlc2l6ZScsLy9INVxuICAgICAgJ29uU3RvcmFnZSc6ICdvblN0b3JhZ2UnLC8vSDVcbiAgICAgICdvblVuZG8nOiAnb25VbmRvJywvL0g1XG4gICAgICAnb25VbmxvYWQnOiAnb25VbmxvYWQnLFxuICAgICAgLypGb3JtKi9cbiAgICAgICdvbkJsdXInOiAnb25CbHVyJyxcbiAgICAgICdvbkNoYW5nZSc6ICdvbkNoYW5nZScsXG4gICAgICAnb25Db250ZXh0TWVudSc6ICdvbkNvbnRleHRNZW51JywvL0g1XG4gICAgICAnb25Gb2N1cyc6ICdvbkZvY3VzJyxcbiAgICAgICdvbkZvcm1DaGFuZ2UnOiAnb25Gb3JtQ2hhbmdlJywvL0g1XG4gICAgICAnb25Gb3JtSW5wdXQnOiAnb25Gb3JtSW5wdXQnLC8vSDVcbiAgICAgICdvbklucHV0JzogJ29uSW5wdXQnLC8vSDVcbiAgICAgICdvbkludmFsaWQnOiAnb25JbnZhbGlkJywvL0g1XG4gICAgICAnb25SZXNldCc6ICdvblJlc2V0JyxcbiAgICAgICdvblNlbGVjdCc6ICdvblNlbGVjdCcsXG4gICAgICAnb25TdWJtaXQnOiAnb25TdWJtaXQnLFxuICAgICAgLypLZXlib2FyZCovXG4gICAgICAnb25LZXlEb3duJzogJ29uS2V5RG93bicsXG4gICAgICAnb25LZXlQcmVzcyc6ICdvbktleVByZXNzJyxcbiAgICAgICdvbktleVVwJzogJ29uS2V5VXAnLFxuICAgICAgLypNb3VzZSovXG4gICAgICAnb25DbGljayc6ICdvbkNsaWNrJyxcbiAgICAgIC8vICdvbkRiQ2xpY2snOidvbkRiQ2xpY2snLFxuICAgICAgJ29uRG91YmxlQ2xpY2snOiAnb25Eb3VibGVDbGljaycsXG4gICAgICAnb25EcmFnJzogJ29uRHJhZycsLy9INVxuICAgICAgJ29uRHJhZ0VuZCc6ICdvbkRyYWdFbmQnLC8vSDVcbiAgICAgICdvbkRyYWdFbnRlcic6ICdvbkRyYWdFbnRlcicsLy9INVxuICAgICAgJ29uRHJhZ0xlYXZlJzogJ29uRHJhZ0xlYXZlJywvL0g1XG4gICAgICAnb25EcmFnT3Zlcic6ICdvbkRyYWdPdmVyJywvL0g1XG4gICAgICAnb25EcmFnU3RhcnQnOiAnb25EcmFnU3RhcnQnLC8vSDVcbiAgICAgICdvbkRyb3AnOiAnb25Ecm9wJywvL0g1XG4gICAgICAnb25Nb3VzZURvd24nOiAnb25Nb3VzZURvd24nLFxuICAgICAgJ29uTW91c2VNb3ZlJzogJ29uTW91c2VNb3ZlJyxcbiAgICAgICdvbk1vdXNlT3V0JzogJ29uTW91c2VPdXQnLFxuICAgICAgJ29uTW91c2VPdmVyJzogJ29uTW91c2VPdmVyJyxcbiAgICAgICdvbk1vdXNlVXAnOiAnb25Nb3VzZVVwJyxcbiAgICAgICdvbk1vdXNlV2hlZWwnOiAnb25Nb3VzZVdoZWVsJywvL0g1XG4gICAgICAnb25TY3JvbGwnOiAnb25TY3JvbGwnLC8vSDVcbiAgICAgIC8qTWVkaWEqL1xuICAgICAgJ29uQWJvcnQnOiAnb25BYm9ydCcsXG4gICAgICAnb25DYW5QbGF5JzogJ29uQ2FuUGxheScsLy9INVxuICAgICAgJ29uQ2FuUGxheVRocm91Z2gnOiAnb25DYW5QbGF5VGhyb3VnaCcsLy9INVxuICAgICAgJ29uRHVyYXRpb25DaGFuZ2UnOiAnb25EdXJhdGlvbkNoYW5nZScsLy9INVxuICAgICAgJ29uRW1wdGllZCc6ICdvbkVtcHRpZWQnLC8vSDVcbiAgICAgICdvbkVuZGVkJzogJ29uRW5kZWQnLC8vSDVcbiAgICAgIC8vICdvbkVycm9yJzogJ29uRXJyb3InLC8vSDVcbiAgICAgICdvbkxvYWRlZERhdGEnOiAnb25Mb2FkZWREYXRhJywvL0g1XG4gICAgICAnb25Mb2FkZWRNZXRhZGF0YSc6ICdvbkxvYWRlZE1ldGFkYXRhJywvL0g1XG4gICAgICAnb25Mb2FkU3RhcnQnOiAnb25Mb2FkU3RhcnQnLC8vSDVcbiAgICAgICdvblBhdXNlJzogJ29uUGF1c2UnLC8vSDVcbiAgICAgICdvblBsYXknOiAnb25QbGF5JywvL0g1XG4gICAgICAnb25QbGF5aW5nJzogJ29uUGxheWluZycsLy9INVxuICAgICAgJ29uUHJvZ3Jlc3MnOiAnb25Qcm9ncmVzcycsLy9INVxuICAgICAgJ29uUmF0ZUNoYW5nZSc6ICdvblJhdGVDaGFuZ2UnLC8vSDVcbiAgICAgICdvblJlYWR5U3RhdGVDaGFuZ2UnOiAnb25SZWFkeVN0YXRlQ2hhbmdlJywvL0g1XG4gICAgICAnb25TZWVrZWQnOiAnb25TZWVrZWQnLC8vSDVcbiAgICAgICdvblNlZWtpbmcnOiAnb25TZWVraW5nJywvL0g1XG4gICAgICAnb25TdGFsbGVkJzogJ29uU3RhbGxlZCcsLy9INVxuICAgICAgJ29uU3VzcGVuZCc6ICdvblN1c3BlbmQnLC8vSDVcbiAgICAgICdvblRpbWVVcGRhdGUnOiAnb25UaW1lVXBkYXRlJywvL0g1XG4gICAgICAnb25Wb2x1bWVDaGFuZ2UnOiAnb25Wb2x1bWVDaGFuZ2UnLC8vSDVcbiAgICAgICdvbldhaXRpbmcnOiAnb25XYWl0aW5nJ1xuICAgIH1cbiAgfSxcbiAgUFJPUDoge1xuICAgIGFueToge1xuICAgICAgJ2FjY2Vzc0tleSc6ICdhY2Nlc3NLZXknLFxuICAgICAgLy8gJ2NsYXNzJzonY2xhc3MnLFxuICAgICAgJ2NsYXNzTmFtZSc6ICdjbGFzc05hbWUnLFxuICAgICAgJ2NvbnRlbnRFZGl0YWJsZSc6ICdjb250ZW50RWRpdGFibGUnLC8vSDVcbiAgICAgICdjb250ZXh0TWVudSc6ICdjb250ZXh0TWVudScsLy9INVxuICAgICAgLy8gJ2RhdGEtKic6J2RhdGEtKicsLy9INVxuICAgICAgJ2RhdGFUb2dnbGUnOiAnZGF0YS10b2dnbGUnLC8vSDVcbiAgICAgICdkaXInOiAnZGlyJyxcbiAgICAgICdkcmFnZ2FibGUnOiAnZHJhZ2dhYmxlJywvL0g1XG4gICAgICAnZHJvcHpvbmUnOiAnZHJvcHpvbmUnLC8vSDVcbiAgICAgICdoaWRkZW4nOiAnaGlkZGVuJywvL0g1XG4gICAgICAnaWQnOiAnaWQnLFxuICAgICAgJ2xhbmcnOiAnbGFuZycsXG4gICAgICAnc3BlbGxDaGVjayc6ICdzcGVsbENoZWNrJywvL0g1XG4gICAgICAnc3R5bGUnOiAnc3R5bGUnLFxuICAgICAgJ3RhYkluZGV4JzogJ3RhYkluZGV4JyxcbiAgICAgICd0aXRsZSc6ICd0aXRsZScsXG4gICAgICAndHJhbnNsYXRlJzogJ3RyYW5zbGF0ZScvL0g1XG4gICAgfSxcbiAgICBhOiB7XG4gICAgICAnY2hhclNldCc6ICdjaGFyU2V0JywvL0g1IVxuICAgICAgJ2Nvb3Jkcyc6ICdjb29yZHMnLC8vSDUhXG4gICAgICAnZG93bmxvYWQnOiAnZG93bmxvYWQnLC8vSDVcbiAgICAgICdocmVmJzogJ2hyZWYnLFxuICAgICAgJ2hyZWZMYW5nJzogJ2hyZWZMYW5nJyxcbiAgICAgICdtZWRpYSc6ICdtZWRpYScsLy9INVxuICAgICAgJ25hbWUnOiAnbmFtZScsLy9INSFcbiAgICAgICdyZWwnOiAncmVsJyxcbiAgICAgICdyZXYnOiAncmV2JywvL0g1IVxuICAgICAgJ3NoYXBlJzogJ3NoYXBlJywvL0g1IVxuICAgICAgJ3RhcmdldCc6ICd0YXJnZXQnLFxuICAgICAgJ3R5cGUnOiAndHlwZScvL0g1XG4gICAgfSxcbiAgICBhc2lkZToge30sXG4gICAgYnI6IHt9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgJ2F1dG9Gb2N1cyc6ICdhdXRvRm9jdXMnLC8vSDVcbiAgICAgICdkaXNhYmxlZCc6ICdkaXNhYmxlZCcsXG4gICAgICAnZm9ybSc6ICdmb3JtJywvL0g1XG4gICAgICAnZm9ybUFjdGlvbic6ICdmb3JtQWN0aW9uJywvL0g1XG4gICAgICAnZm9ybUVuY1R5cGUnOiAnZm9ybUVuY1R5cGUnLC8vSDVcbiAgICAgICdmb3JtTWV0aG9kJzogJ2Zvcm1NZXRob2QnLC8vSDVcbiAgICAgICdmb3JtTm9WYWxpZGF0ZSc6ICdmb3JtTm9WYWxpZGF0ZScsLy9INVxuICAgICAgJ2Zvcm1UYXJnZXQnOiAnZm9ybVRhcmdldCcsLy9INVxuICAgICAgJ25hbWUnOiAnbmFtZScsXG4gICAgICAndHlwZSc6ICd0eXBlJyxcbiAgICAgICd2YWx1ZSc6ICd2YWx1ZSdcbiAgICB9LFxuICAgIGNhbnZhczoge30sXG4gICAgZGl2OiB7XG4gICAgICAnYWxpZ24nOiAnYWxpZ24nLC8vIVxuICAgICAgJ3N0eWxlJzogJ3N0eWxlJy8vIVxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICdhbGlnbic6ICdhbGlnbidcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAnYWxpZ24nOiAnYWxpZ24nXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgJ2FsaWduJzogJ2FsaWduJ1xuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgICdhbGlnbic6ICdhbGlnbidcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICAnYWxpZ24nOiAnYWxpZ24nXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgJ2FsaWduJzogJ2FsaWduJ1xuICAgIH0sXG4gICAgaToge30sXG4gICAgaW1nOiB7XG4gICAgICAnc3JjJzogJ3NyYycsXG4gICAgICAnYWx0JzogJ2FsdCdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAncGxhY2Vob2xkZXInOiAncGxhY2Vob2xkZXInLFxuICAgICAgJ3JlYWRPbmx5JzogJ3JlYWRPbmx5JyxcbiAgICAgICd0eXBlJzogJ3R5cGUnLFxuICAgICAgJ3ZhbHVlJzogJ3ZhbHVlJ1xuICAgIH0sXG4gICAgbGk6IHtcbiAgICAgICd0eXBlJzogJ3R5cGUnLC8vIVxuICAgICAgJ3ZhbHVlJzogJ3ZhbHVlJy8vIVxuICAgIH0sXG4gICAgbmF2OiB7fSxcbiAgICB1bDoge1xuICAgICAgJ2NvbXBhY3QnOiAnY29tcGFjdCcsLy8hXG4gICAgICAndHlwZSc6ICd0eXBlJ1xuICAgIH0sXG4gICAgb2w6IHtcbiAgICAgICdjb21wYWN0JzogJ2NvbXBhY3QnLC8vIVxuICAgICAgJ3R5cGUnOiAndHlwZSdcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgICdhbGlnbic6ICdhbGlnbidcbiAgICB9LFxuICAgIHNwYW46IHt9XG4gIH1cbn07XG5cbi8vSFRNTCBhbGwgcHJvcGVydGllc1xuSFRNTC5hbnlQID0gXy5hc3NpZ24oe30sIEhUTUwuRVZFTlQuYW55LCBIVE1MLlBST1AuYW55KTtcblxuLy9IVE1MIGFsbCBkYXRhLSpcbkhUTUwuZGF0YVAgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoKCRwcm9wKSA9PiB7XG4gICAgcmV0dXJuIF8uc3RhcnRzV2l0aCgkcHJvcCwgJ2RhdGEtJyk7XG4gIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MO1xuIl19