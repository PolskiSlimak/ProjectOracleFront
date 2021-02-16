import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntityService } from '../entity.service';
import { JobHistory } from '../job-history';
import { JobHistoryId } from '../job-history-id';
@Component({
  selector: 'app-jobhistory',
  templateUrl: './jobhistory.component.html',
  styleUrls: ['./jobhistory.component.css']
})
export class JobhistoryComponent implements OnInit {
  jh: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGet();
  }
  onGet() {
    this.service.getJobHistory().subscribe((response: any) => {
      this.jh = response;
    });
  }
  onSubmit(form: NgForm) {
    let entityId = new JobHistoryId(form.value["1"], form.value["2"]);
    let entity = new JobHistory(entityId, form.value["3"], form.value["4"], form.value["5"]);
    this.service.putJobHistory(entity).subscribe(
      (data: JobHistory) => {
        form.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = new JobHistoryId(form.value["1"], form.value["2"]);
    this.service.deleteJobHistory(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
