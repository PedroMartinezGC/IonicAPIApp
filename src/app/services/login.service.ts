import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public api_url: string = "https://optimizaprocess.net/";

  constructor(private _http: HttpClient) { }

  loginUser(form: FormData): Observable<any>{         //The body data is sended in Form type
    
    console.log(form);
    
    return this._http.post(this.api_url + "test/", form);
  }
}