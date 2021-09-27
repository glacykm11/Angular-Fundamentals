import { Routes } from "@angular/router";
import {
    EventDetailsComponent,
    EventsListResolver,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventsResolver
} from './events/index'
import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [ 
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventsResolver}},
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: () => import ('./user/user.module').then(m => m.UserModule)}

]