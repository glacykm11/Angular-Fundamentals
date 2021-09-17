import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from ".";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color: #E05C65; padding-left: 10px;}
    .error input{ background-color: #E3C3C5;}
    .error ::webkit-input-placeholder { color: #999; }
    .error ::moz-placeholder { color: #999; }
    .error :moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent{
   
    newEvent
    isDirty:boolean = true

    constructor(private routes:Router, private eventService: EventService){}

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.routes.navigate(['/events'])
    }

    cancel(){
        this.routes.navigate(['/events'])
    }

}