import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
import { Country } from '../country';
import { NgForm } from '@angular/forms';
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
  onSubmit(countryForm: NgForm) {
    let country = new Country(countryForm.value["first"], countryForm.value["second"], countryForm.value["third"]);
    this.service.putCountries(country).subscribe(
      (data: Country) => {
        countryForm.reset();
      },
    );
  }
  onSubmitt(form: NgForm) {
    let id = new String(form.value["1"]);
    this.service.deleteCountries(id).subscribe(
      (data: typeof id) => {
        form.reset();
      },
    );
  }
}
