import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UpdateViewsService {

  public api_url: string = "https://optimizaprocess.net/test/";
  public url_post: string = "o=update_visits";

  constructor(private _http: HttpClient){
    
  }
  updateViews(id: any){                     

    var formData: any = new FormData();
    formData.append('user', localStorage.getItem('user'));                //The data is sent in Form type.
    formData.append('pass', localStorage.getItem('pass'));
    formData.append('item_id', id);

    return this._http.post(this.api_url + "?" +  this.url_post, formData);
    
  }
}
