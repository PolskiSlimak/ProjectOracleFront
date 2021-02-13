import { Component, OnInit } from '@angular/core';
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
}
