import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { JobComponent } from './job/job.component';
import { CountryComponent } from './country/country.component';
import { JobhistoryComponent } from './jobhistory/jobhistory.component';
import { LocationComponent } from './location/location.component';
import { RegionComponent } from './region/region.component';
const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'departments', component: DepartmentComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'job-history', component: JobhistoryComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'regions', component: RegionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
