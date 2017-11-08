import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: [ './assessments.component.css' ]
})
export class AssessmentsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

  findAssessments(): void {
// найти assessment по имени студента
  }
}
