// src/app/person-detail/person-detail.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    standalone: true
})
export class PersonDetailComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string, address: string }) { }
}
