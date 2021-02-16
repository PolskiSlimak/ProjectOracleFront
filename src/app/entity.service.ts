import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country';
import { Observable } from 'rxjs';
import { Department } from './department';
import { Employees } from './employees';
import { Job } from './job';
import { JobHistory } from './job-history';
import { Location } from './location';
import { Region } from './region';
import { JobHistoryId } from './job-history-id';
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

  putEmployee(entity: Employees): Observable<Employees> {
    let ending = "/employees";
    return this.http.put<Employees>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  deleteEmployee(entity: number): Observable<number> {
    let ending = "/employeesD";
    return this.http.put<number>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getDepartments() {
    let ending = "/departments";
    return this.http.get(this.link + ending);
  }

  putDepartments(entity: Department): Observable<Department> {
    let ending = "/departments";
    return this.http.put<Department>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  deleteDepartments(entity: number): Observable<number> {
    let ending = "/departmentsD";
    return this.http.put<number>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  setLocalStorage(listType: any, list: any) {
    localStorage.setItem(listType, JSON.stringify(list));
  }

  getJobs() {
    let ending = "/jobs";
    return this.http.get(this.link + ending);
  }

  putJob(entity: Job): Observable<Job> {
    let ending = "/jobs";
    return this.http.put<Job>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  deleteJob(entity: String): Observable<String> {
    let ending = "/jobsD";
    return this.http.put<String>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getLocations() {
    let ending = "/locations";
    return this.http.get(this.link + ending);
  }

  putLocation(entity: Location): Observable<Location> {
    let ending = "/locations";
    return this.http.put<Location>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  deleteLocation(entity: number): Observable<number> {
    let ending = "/locationsD";
    return this.http.put<number>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
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

  deleteCountries(entity: String): Observable<String> {
    let ending = "/countriesD";
    return this.http.put<String>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getRegions() {
    let ending = "/regions";
    return this.http.get(this.link + ending);
  }

  putRegion(entity: Region): Observable<Region> {
    let ending = "/regions";
    return this.http.put<Region>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  deleteRegion(entity: number): Observable<number> {
    let ending = "/regionsD";
    return this.http.put<number>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getJobHistory() {
    let ending = "/jobhistory";
    return this.http.get(this.link + ending);
  }

  putJobHistory(entity: JobHistory): Observable<JobHistory> {
    let ending = "/jobhistory";
    return this.http.put<JobHistory>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  deleteJobHistory(entity: JobHistoryId): Observable<JobHistoryId> {
    let ending = "/jobhistoryD";
    return this.http.put<JobHistoryId>(this.link + ending, entity, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}
