import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../shared/shareddata.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public _shared: ShareddataService){
  }

  ngOnInit(){
    this.get();
 }


  get() {
    this._shared.getServices().subscribe((data) => {
      this._shared.allservices=data;
    });
  }

 
  


}
