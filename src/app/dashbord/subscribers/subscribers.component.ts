import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareddataService } from 'src/app/shared/shareddata.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {


  constructor(private fb: FormBuilder, public sharedDataService: ShareddataService) {

  }

  ngOnInit() {
    this.fetchSubscribers();
  }

  fetchSubscribers() {
    this.sharedDataService.getSubscribers().subscribe((subscribers: any[]) => {
        this.sharedDataService.allsubsribers = subscribers;
      },
      (error: any) => {
        console.error('Error fetching subscribers:', error);
      }
    );
  }


  delete(index: number) {
    const subscriberId = this.sharedDataService.allsubsribers[index].id;

    this.sharedDataService.deleteSubscriber(subscriberId).subscribe(
      () => {
        console.log('Subscriber deleted successfully!');

        this.fetchSubscribers();
      },
      (error: any) => {
        console.error('Error deleting subscriber:', error);
      }
    );
  }
}