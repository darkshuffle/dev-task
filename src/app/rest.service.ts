import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

 /**
   * Function to call mock api to retrieve data.
   */
  public getData() {
    this.wait(800);
    return this.dataToReturn();
  }

  /**
   * Mocking a call to a rest API working asyncronously.
   * @param duration the mocked delay
   */
  private wait(duration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + duration) { /* do nothing */ }
  }

/**
 * Function to supply random data.
 */
  private dataToReturn() {
    return [{
      name: 'GlobalCorp',
      data: {
        facebook: Math.floor(Math.random() * 100000),
        youtube: Math.floor(Math.random() * 100000),
        twitter: Math.floor(Math.random() * 10000),
      }
    }, {
      name: 'Globogym',
      data: {
        facebook: Math.floor(Math.random() * 100000),
        youtube: Math.floor(Math.random() * 100000),
        twitter: Math.floor(Math.random() * 10000),
      }
    }, {
      name: 'IndustryCo',
      data: {
        facebook: Math.floor(Math.random() * 10000),
        youtube: Math.floor(Math.random() * 100000),
        twitter: Math.floor(Math.random() * 10000),
      },
    }]
  }
}
