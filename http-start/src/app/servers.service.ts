import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServersService {
  url = 'https://udemy-ng-http-course-daec9.firebaseio.com/';
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(this.url, servers, {headers: headers} );
    return this.http.put(this.url + 'data.json', servers, {headers: headers} );
  }
  getServers() {
    return this.http.get(this.url + 'data.json')
      .map((response: Response) => {
        const data = response.json();
        for ( const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  }
  getAppName() {
    return this.http.get(this.url + 'appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
