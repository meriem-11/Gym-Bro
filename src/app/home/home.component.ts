import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  checkprices(){
    this.router.navigate(['/prices']);
  }
  photo ="assets/img/intro/img5.jpg";



  constructor(private router: Router) { 
  }
}
