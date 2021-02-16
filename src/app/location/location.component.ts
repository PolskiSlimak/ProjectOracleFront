import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntityService } from '../entity.service';
import { Location } from '../location';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  l: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGet();
  }
  onGet() {
    this.service.getLocations().subscribe((response: any) => {
      this.l = response;
    });
  }
  onSubmit(form: NgForm) {
    let entity = new Location(form.value["1"], form.value["2"], form.value["3"], form.value["4"], form.value["5"], form.value["6"]);
    this.service.putLocation(entity).subscribe(
      (data: Location) => {
        form.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = form.value["1"];
    this.service.deleteLocation(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
