import {browserHistory} from 'react-router';


export default class Path {

  static forward(url) {
    browserHistory.push(url);
  }
}
