// src/app/app.component.ts
import { Component } from '@angular/core';
import { PeopleListComponent } from './people-list/people-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [PeopleListComponent]
})
export class AppComponent {}
