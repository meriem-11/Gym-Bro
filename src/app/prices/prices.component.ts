import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  join(){
    this.router.navigate(['/join']);
  }



  constructor(private router: Router) { 
  }
}
