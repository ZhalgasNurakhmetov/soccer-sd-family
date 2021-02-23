import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'player-list-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlBarComponent implements OnInit, OnDestroy{
  @Input() team: string;
  @Output() onGoToPlayerCreate = new EventEmitter();
  @Output() onSearchPlayer = new EventEmitter<string>();

  searchText = new FormControl();

  private unsubscribe$ = new Subject();

  constructor() { }

  ngOnInit() {
    this.subscribeToSearchText();
  }

  private subscribeToSearchText() {
    this.searchText.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$)
        )
      .subscribe(value => {
      this.onSearchPlayer.emit(value);
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
