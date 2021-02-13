import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  j: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGet();
  }
  onGet() {
    this.service.getJobs().subscribe((response: any) => {
      this.j = response;
    });
  }
}
