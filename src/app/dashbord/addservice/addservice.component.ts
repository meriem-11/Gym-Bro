import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/services';
import { ShareddataService } from 'src/app/shared/shareddata.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  constructor(public _shared: ShareddataService) {}

  service: Services = {
    id: 0, 
    servicename: '',
    imageurl: '',
    description: ''
  };

  ngOnInit(): void {
    this.loadServices();
  }

  editedIndex: number = -1;

  add() {
    if (this.editedIndex === -1) {
      this.service.id = this.generateNewId();
      this._shared.addService({ ...this.service }).subscribe(() => {
        this.loadServices();
      });
    } else {
      this._shared
        .updateService(this.service.id, { ...this.service })
        .subscribe(() => {
          this.loadServices();
          this.editedIndex = -1;
        });
    }

    this.service = {
      id: 0, 
      servicename: '',
      imageurl: '',
      description: ''
    };
  }

  edit(index: number) {
    this.editedIndex = index;
    this.service = { ...this._shared.allservices[index] };
  }

  delete(index: number) {
    const serviceId = this._shared.allservices[index].id;
    this._shared.deleteService(serviceId).subscribe(() => {
      this.loadServices();
    });
  }

  private loadServices() {
    this._shared.getServices().subscribe(data => {
      this._shared.allservices = data;
    });
  }

  private generateNewId(): number {
    const maxId = Math.max(...this._shared.allservices.map(service => service.id), 0);
    return maxId + 1;
  }
}
