import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  public api_url: string = "https://optimizaprocess.net/";

  constructor(private _http: HttpClient) { }

  getItems(): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.api_url + "test/", {headers: headers});
  }
}
