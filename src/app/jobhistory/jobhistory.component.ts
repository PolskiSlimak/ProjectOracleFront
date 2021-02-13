import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
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
}
