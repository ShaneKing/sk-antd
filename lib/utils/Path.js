'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Path = function () {
  function Path() {
    _classCallCheck(this, Path);
  }

  _createClass(Path, null, [{
    key: 'forward',
    value: function forward(url) {
      _reactRouter.browserHistory.push(url);
    }
  }]);

  return Path;
}();

exports.default = Path;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1BhdGguanMiXSwibmFtZXMiOlsiUGF0aCIsInVybCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUFHcUJBLEk7Ozs7Ozs7NEJBRUpDLEcsRUFBSztBQUNsQixrQ0FBZUMsSUFBZixDQUFvQkQsR0FBcEI7QUFDRDs7Ozs7O2tCQUprQkQsSSIsImZpbGUiOiJ1dGlscy9QYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcblxuICBzdGF0aWMgZm9yd2FyZCh1cmwpIHtcbiAgICBicm93c2VySGlzdG9yeS5wdXNoKHVybCk7XG4gIH1cbn1cbiJdfQ==