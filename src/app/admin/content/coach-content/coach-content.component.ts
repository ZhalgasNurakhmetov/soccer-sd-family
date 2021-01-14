import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coach-content',
  templateUrl: './coach-content.component.html',
  styleUrls: ['./coach-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
