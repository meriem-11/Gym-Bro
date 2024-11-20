import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../shared/shareddata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(public _shared: ShareddataService) {}

  ngOnInit(){
    this.get();
  }
   
 CoachesNbr:number=0;
 subscribersNbr:number=0;
 
  get() {
    this._shared.getTeamMembers().subscribe((data) => {
      this._shared.allTeamMembers=data;
      this.CoachesNbr=this._shared.allTeamMembers.length;
    });
    this._shared.getSubscribers().subscribe((data) => {
      this._shared.allsubsribers=data;
      this.subscribersNbr=this._shared.allsubsribers.length;
    });
}
  
}
