import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employees } from '../employees';
import { EntityService } from '../entity.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  e: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGetEmployees();
  }
  onGetEmployees() {
    this.service.getEmployee().subscribe((response: any) => {
      this.e = response;
    });
  }
  onSubmit(form: NgForm) {
    let entity = new Employees(form.value["1"], form.value["2"], form.value["3"], form.value["4"], form.value["5"], form.value["6"], form.value["7"], form.value["8"], form.value["9"], form.value["10"], form.value["11"]);
    this.service.putEmployee(entity).subscribe(
      (data: Employees) => {
        form.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = form.value["1"];
    this.service.deleteEmployee(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
