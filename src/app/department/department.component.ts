import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
import { NgForm } from '@angular/forms';
import { Department } from '../department';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  d: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGet();
  }
  onGet() {
    this.service.getDepartments().subscribe((response: any) => {
      this.d = response;
    });
  }
  onSubmit(form: NgForm) {
    let entity = new Department(form.value["first"], form.value["second"], form.value["third"], form.value["forth"]);
    this.service.putDepartments(entity).subscribe(
      (data: Department) => {
        form.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = form.value["1"];
    this.service.deleteDepartments(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
