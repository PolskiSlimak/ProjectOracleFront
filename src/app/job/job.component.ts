import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntityService } from '../entity.service';
import { Job } from '../job';
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
  onSubmit(form: NgForm) {
    let entity = new Job(form.value["1"], form.value["2"], form.value["3"], form.value["4"]);
    this.service.putJob(entity).subscribe(
      (data: Job) => {
        form.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = form.value["1"];
    this.service.deleteJob(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
