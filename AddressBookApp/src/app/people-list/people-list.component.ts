// src/app/people-list/people-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../services/people.service';
import { MatDialog } from '@angular/material/dialog';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    standalone: true
})
export class PeopleListComponent implements OnInit {
    people: Person[] = [];

    constructor(private peopleService: PeopleService, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.peopleService.getPeople().subscribe(data => {
            this.people = data;
            this.populateList();
        });
    }

    populateList(): void {
        const ul = document.getElementById('people-list');
        if (ul) {
            ul.innerHTML = ''; // Clear existing list items
            this.people.forEach(person => {
                const li = document.createElement('li');
                li.textContent = person.name;
                li.onclick = () => this.openPersonDetail(person.id);
                li.classList.add('list-item');
                ul.appendChild(li);
            });
        }
    }

    openPersonDetail(id: number): void {
        this.peopleService.getPerson(id).subscribe(person => {
            this.dialog.open(PersonDetailComponent, { data: person });
        });
    }
}
