import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
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
}
