import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

//Services
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginService]
})
export class LoginPage implements OnInit {

  public logged: string = 'false';     //for testing if the user is logged, the value is a string, cause the localStorage uses strings

  public loginForm = new FormGroup({                  //object which contains the form inputs and their validation
    user : new FormControl("", Validators.required),
    pass : new FormControl("", Validators.required)
  })

  constructor(
    private _alertController: AlertController,
    private _router: Router,
    private _login: LoginService
    ) {
    }
  
  ngDoCheck(){
    if(sessionStorage.getItem('logged') !== 'true'){
      sessionStorage.setItem('logged', 'false');
    }
    this.logged = sessionStorage.getItem('logged');     //When we return to the login page from the item list page, it takes the login value
    
  }
  ngOnInit(): void {
    
    if (window.sessionStorage.getItem("logged") == 'true') {    //This is to maintain the session opened even though we will reload the page

      this.logged = 'true';
  
    } else {
      this._router.navigate(['login']);   //if the session haven't been opened, redirect to the login page
    }
  }

  onLogin(){
    
    var formData: any = new FormData();
    formData.append('user', this.loginForm.get('user').value);
    formData.append('pass', this.loginForm.get('pass').value);
    console.log(this.loginForm.get('user').value);

    this._login.loginUser(formData).subscribe(response=>{
      console.log(response);
      console.log(response.error);

      if(response.error == 0 && response.message == 'Login ok'){
        this._router.navigate(['itemlist']);    //if logged == true, the send me to the itemlist

        sessionStorage.setItem('logged', 'true');
        localStorage.setItem('user', this.loginForm.get('user').value);
        localStorage.setItem('pass', this.loginForm.get('pass').value);

      }else{
        this.presentAlert();
      }
    });
  }

  async presentAlert() {
    const alert = await this._alertController.create({
        header: 'Incorrect data',
        message: 'Introduce the correct user',
        buttons: ['Accept']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  logout(){
    this.logged = 'false';
    sessionStorage.setItem('logged', 'false');
    localStorage.removeItem('user');
    localStorage.removeItem('pass');

    console.log(this.logged);
  }
  
}
  
  


