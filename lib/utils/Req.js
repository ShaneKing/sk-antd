'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Req = function Req() {
  _classCallCheck(this, Req);
};

Req.PARAM = {
  fromHref: 'fromHref',
  salt: 'salt',
  token: 'token'
};
Req.PATH = {
  auth: '/auth',
  login: '/login',
  admin: {
    dashboard: '/admin/dashboard',
    mail: '/admin/mail',
    test: {
      long: '/admin/test/long',
      short: '/admin/test/short'
    }
  }
};
Req.SERVICE = {
  dashboard: {
    failedTimes: '/dashboard/failedTimes',
    onlineUsers: '/dashboard/onlineUsers',
    successTimes: '/dashboard/successTimes',
    totalUsers: '/dashboard/totalUsers',
    userCharts: '/dashboard/userCharts'
  },
  login: {
    salt: '/login/salt',
    token: '/login/token'
  },
  mail: {
    lst: '/mail/lst',
    num: '/mail/num'
  },
  user: {
    one: '/user/one'
  }
};
exports.default = Req;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1JlcS5qcyJdLCJuYW1lcyI6WyJSZXEiLCJQQVJBTSIsImZyb21IcmVmIiwic2FsdCIsInRva2VuIiwiUEFUSCIsImF1dGgiLCJsb2dpbiIsImFkbWluIiwiZGFzaGJvYXJkIiwibWFpbCIsInRlc3QiLCJsb25nIiwic2hvcnQiLCJTRVJWSUNFIiwiZmFpbGVkVGltZXMiLCJvbmxpbmVVc2VycyIsInN1Y2Nlc3NUaW1lcyIsInRvdGFsVXNlcnMiLCJ1c2VyQ2hhcnRzIiwibHN0IiwibnVtIiwidXNlciIsIm9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBcUJBLEc7Ozs7QUFBQUEsRyxDQUVaQyxLLEdBQVE7QUFDYkMsWUFBVSxVQURHO0FBRWJDLFFBQU0sTUFGTztBQUdiQyxTQUFPO0FBSE0sQztBQUZJSixHLENBWVpLLEksR0FBTztBQUNaQyxRQUFNLE9BRE07QUFFWkMsU0FBTyxRQUZLO0FBR1pDLFNBQU87QUFDTEMsZUFBVyxrQkFETjtBQUVMQyxVQUFNLGFBRkQ7QUFHTEMsVUFBTTtBQUNKQyxZQUFNLGtCQURGO0FBRUpDLGFBQU87QUFGSDtBQUhEO0FBSEssQztBQVpLYixHLENBeUJaYyxPLEdBQVU7QUFDZkwsYUFBVztBQUNUTSxpQkFBYSx3QkFESjtBQUVUQyxpQkFBYSx3QkFGSjtBQUdUQyxrQkFBYyx5QkFITDtBQUlUQyxnQkFBWSx1QkFKSDtBQUtUQyxnQkFBWTtBQUxILEdBREk7QUFRZlosU0FBTztBQUNMSixVQUFNLGFBREQ7QUFFTEMsV0FBTztBQUZGLEdBUlE7QUFZZk0sUUFBTTtBQUNKVSxTQUFLLFdBREQ7QUFFSkMsU0FBSztBQUZELEdBWlM7QUFnQmZDLFFBQU07QUFDSkMsU0FBSztBQUREO0FBaEJTLEM7a0JBekJFdkIsRyIsImZpbGUiOiJ1dGlscy9SZXEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXEge1xuXG4gIHN0YXRpYyBQQVJBTSA9IHtcbiAgICBmcm9tSHJlZjogJ2Zyb21IcmVmJyxcbiAgICBzYWx0OiAnc2FsdCcsXG4gICAgdG9rZW46ICd0b2tlbidcbiAgfTtcblxuICAvKipcbiAgICogd2h5IG5vdCBpbiBSb3V0ZXJzIGJ5IHN0YXRpYz9cbiAgICogYmVjYXVzZSB0aGUgUm91dGVycyBpcyBsb2FkIGJ5IG5lZWRcbiAgICovXG4gIHN0YXRpYyBQQVRIID0ge1xuICAgIGF1dGg6ICcvYXV0aCcsXG4gICAgbG9naW46ICcvbG9naW4nLFxuICAgIGFkbWluOiB7XG4gICAgICBkYXNoYm9hcmQ6ICcvYWRtaW4vZGFzaGJvYXJkJyxcbiAgICAgIG1haWw6ICcvYWRtaW4vbWFpbCcsXG4gICAgICB0ZXN0OiB7XG4gICAgICAgIGxvbmc6ICcvYWRtaW4vdGVzdC9sb25nJyxcbiAgICAgICAgc2hvcnQ6ICcvYWRtaW4vdGVzdC9zaG9ydCdcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIFNFUlZJQ0UgPSB7XG4gICAgZGFzaGJvYXJkOiB7XG4gICAgICBmYWlsZWRUaW1lczogJy9kYXNoYm9hcmQvZmFpbGVkVGltZXMnLFxuICAgICAgb25saW5lVXNlcnM6ICcvZGFzaGJvYXJkL29ubGluZVVzZXJzJyxcbiAgICAgIHN1Y2Nlc3NUaW1lczogJy9kYXNoYm9hcmQvc3VjY2Vzc1RpbWVzJyxcbiAgICAgIHRvdGFsVXNlcnM6ICcvZGFzaGJvYXJkL3RvdGFsVXNlcnMnLFxuICAgICAgdXNlckNoYXJ0czogJy9kYXNoYm9hcmQvdXNlckNoYXJ0cydcbiAgICB9LFxuICAgIGxvZ2luOiB7XG4gICAgICBzYWx0OiAnL2xvZ2luL3NhbHQnLFxuICAgICAgdG9rZW46ICcvbG9naW4vdG9rZW4nXG4gICAgfSxcbiAgICBtYWlsOiB7XG4gICAgICBsc3Q6ICcvbWFpbC9sc3QnLFxuICAgICAgbnVtOiAnL21haWwvbnVtJ1xuICAgIH0sXG4gICAgdXNlcjoge1xuICAgICAgb25lOiAnL3VzZXIvb25lJ1xuICAgIH1cbiAgfVxufVxuIl19