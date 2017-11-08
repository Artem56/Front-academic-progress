import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: [ './faculties.component.css' ]
})
export class FacultiesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }
}
