import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EntityService {
  link: string

  constructor(private http: HttpClient) {
    this.link = "http://localhost:8080";
  }

  getEmployee() {
    let ending = "/employees";
    return this.http.get(this.link+ending);
  }

  getDepartments() {
    let ending = "/departments";
    return this.http.get(this.link + ending);
  }

  setLocalStorage(listType: any, list: any) {
    localStorage.setItem(listType, JSON.stringify(list));
  }

  getJobs() {
    let ending = "/jobs";
    return this.http.get(this.link + ending);
  }

  getLocations() {
    let ending = "/locations";
    return this.http.get(this.link + ending);
  }

  getCountries() {
    let ending = "/countries";
    return this.http.get(this.link + ending);
  }

  putCountries(country: Country): Observable<Country> {
    let ending = "/countries";
    return this.http.put<Country>(this.link + ending, country, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getRegions() {
    let ending = "/regions";
    return this.http.get(this.link + ending);
  }

  getJobHistory() {
    let ending = "/jobhistory";
    return this.http.get(this.link + ending);
  }
}
