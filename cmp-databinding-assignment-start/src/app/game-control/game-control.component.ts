import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  numAdd = 0;
  interval;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.numAdd + 1);
      this.numAdd++;
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }
}
