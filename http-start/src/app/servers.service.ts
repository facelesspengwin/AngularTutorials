import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServersService {
  url = 'https://udemy-ng-http-course-daec9.firebaseio.com/data';
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(this.url, servers, {headers: headers} );
    return this.http.put(this.url, servers, {headers: headers} );
  }
  getServers() {
    return this.http.get(this.url)
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
}
