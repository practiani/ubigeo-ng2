import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UbigeoService {

  constructor(private http: Http) {
    console.log('UbigeoService');
  }

  getPosts() {
    return this.http.get('http://localhost:8004/api/ubigeo/ubigeos')
      .map(res => res.json());
  }

}
