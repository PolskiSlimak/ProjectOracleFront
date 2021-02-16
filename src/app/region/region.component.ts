import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntityService } from '../entity.service';
import { Region } from '../region';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  r: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGet();
  }
  onGet() {
    this.service.getRegions().subscribe((response: any) => {
      this.r = response;
    });
  }
  onSubmit(form: NgForm) {
    let entity = new Region(form.value["1"], form.value["2"]);
    this.service.putRegion(entity).subscribe(
      (data: Region) => {
        form.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = form.value["1"];
    this.service.deleteRegion(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
