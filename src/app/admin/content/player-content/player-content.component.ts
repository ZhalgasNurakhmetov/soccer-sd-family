import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'player-content',
  templateUrl: './player-content.component.html',
  styleUrls: ['./player-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
