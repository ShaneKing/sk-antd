import {browserHistory} from 'react-router';

//0 ref
export default class Utils {

  /**
   * Safe chained function
   *
   * @param {function} functions to chain
   * @returns {function|null}
   */
  static createChainedFunction(...funcs) {
    return funcs
      .filter(f => f != null)
      .reduce((acc, f) => {
        if (!_.isFunction(f)) {
          throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }

        if (acc === null) {
          return f;
        }

        return function chainedFunction(...args) {
          acc.apply(this, args);
          f.apply(this, args);
        };
      }, null);
  }

  static forward(url) {
    browserHistory.push(url);
  }

  static isTrivialHref(href) {
    return !href || href.trim() === '#';
  }


}
