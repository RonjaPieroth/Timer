import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrl: './timer-input.component.css'
})
export class TimerInputComponent {

  timerInput: number = 0;
  remainingTime: number = 0
  interval: number = 1000;
  hasFinished: boolean = false;
  timerSubscription?: Subscription;
  isRunning: boolean = false;

  toggleTimer(): void {
    this.hasFinished = false;
    if (this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer()
    }
  }

  startTimer(): void {
    this.remainingTime = this.timerInput;
    this.isRunning = true;
    this.timerSubscription = interval(this.interval).subscribe((count) => {
      this.remainingTime = this.timerInput - count;
      if (this.remainingTime == 0) {
        this.stopTimer();
        this.hasFinished = true;
      }
    })
  }

  stopTimer(): void {
    this.timerSubscription?.unsubscribe();
    this.isRunning = false;
    this.timerInput = this.remainingTime;
  }

}

