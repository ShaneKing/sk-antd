export default class Req {

  static PARAM = {
    fromHref: 'fromHref',
    salt: 'salt',
    token: 'token'
  };

  /**
   * why not in Routers by static?
   * because the Routers is load by need
   */
  static PATH = {
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

  static SERVICE = {
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
  }
}
