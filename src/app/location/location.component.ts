import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
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
}
