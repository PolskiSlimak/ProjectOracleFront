import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  c: any = [];
  constructor(private service: EntityService) { 
  }

  ngOnInit(): void {
    this.onGet();
  }
  onGet() {
    this.service.getCountries().subscribe((response: any) => {
      this.c = response;
    });
  }
}
