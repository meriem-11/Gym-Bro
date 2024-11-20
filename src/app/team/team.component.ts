import { Component } from '@angular/core';
import { ShareddataService } from '../shared/shareddata.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  constructor(public _shared: ShareddataService) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this._shared.getTeamMembers().subscribe((data) => {
      this._shared.allTeamMembers = data;
    });
  }

}