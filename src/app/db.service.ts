import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DbService {

  urlAppendix: string = "http://allkorean.com.ua";

  constructor(
    private http: Http
  ) { 
    // if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    //   this.urlAppendix = "http://localhost:3000"
    // }
  }

  getAllPosts() {
    return this.http.get(this.urlAppendix + '/api/posts')
      .map(res => res.json());
  }

  getProducts(search: string, limit: number, offset: number, orderBy: string) {
    var req = this.urlAppendix + '/api/getProductsFromCloudSQL?search=' + search + "&limit=" + limit + "&offset=" + offset + "&orderBy=" + orderBy
    console.log(req)
    return this.http.get(req)
      .map(res => res.json());
  }
}
