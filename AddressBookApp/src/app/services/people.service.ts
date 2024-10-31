// src/app/services/people.service.ts
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Person {
    id: number;
    name: string;
    address: string;
}

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    private apiUrl = 'https://localhost:7051/api/People';

    constructor(private http: HttpClient) { }

    getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(this.apiUrl);
    }

    getPerson(id: number): Observable<Person> {
        return this.http.get<Person>(`${this.apiUrl}/${id}`);
    }
    getJoke() {
        return this.http.get(this.apiUrl)
    }
}

