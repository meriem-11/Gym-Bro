import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private router: Router,public _shared:AuthService){
      
  }
   admin={
       username:'admin',
       password:'admin'
   }
   userinput='';
   passwordinput='';
   wrong=false;
   onSubmit(){
    if(this.admin.username===this.userinput && this.passwordinput===this.admin.password){
            this._shared.token=true;
            this.router.navigate(['/dashboard']);
    }else{
      this.wrong=true;
    }
   }
  
}
