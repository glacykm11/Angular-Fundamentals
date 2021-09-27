import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import {
  EventsListComponent, 
  EventThumbnailComponent,
  EventService,
  EventsListResolver,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe,
  EventsResolver,
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective  } from './common';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let toastr:Toastr = window['toastr']
let jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator,
  ],
  providers: [ 
    EventService,
    EventsResolver,
    VoterService,
    {
      provide: TOASTR_TOKEN,
      useValue:toastr
    }, 
    {
      provide: JQ_TOKEN,
      useValue:jQuery
    },
    EventsListResolver,
    AuthService,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
    return window.confirm ('You have not saved this event, do you really want to cancel?')
  return true
  }