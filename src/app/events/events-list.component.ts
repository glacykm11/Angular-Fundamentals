import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

declare let toastr

@Component ({
    template:`
    <section>    
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event" ></event-thumbnail>
            </div>    
        </div>
    </section>  
    ` 
})
export class EventsListComponent implements OnInit{
    events: IEvent[];

   constructor(private eventService: EventService ,private route: ActivatedRoute){}
   
   ngOnInit(){
       this.events = this.route.snapshot.data['events']
   }

}