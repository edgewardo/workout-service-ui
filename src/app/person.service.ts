import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  protected personList: Person[] = [
    {
      id: 1,
      firstName: 'Eric',
      lastName: 'Ward',
      height: 68,
      weight: 200,
    },
    {
      id: 2,
      firstName: 'Sandy',
      lastName: 'Ward',
      height: 64,
      weight: 190,
    },

  ];

  private personUrl = '`http://localhost:8080/person';

  getAllPersons(): Person[] {
    // return this.http.get<Person[]>(this.personUrl);
    return this.personList;
  }
  
  getPersonById(id: number): Person | undefined {
    return this.personList.find(person => person.id === id);
  }
}
