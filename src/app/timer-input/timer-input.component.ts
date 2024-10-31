import { Component } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrl: './timer-input.component.css'
})
export class TimerInputComponent {
  isRunning: boolean = false;
  timerInput: number = 0;
  remainingTime: number = 0
  interval: number = 1000;
  hasfinished: boolean = false;
  timerSubscription?: Subscription;

  toggleTimer():void{
    this.hasfinished = false;
    if (this.isRunning){
      this.stopTimer();
    } else {this.startTimer()}
  }

startTimer():void{
  this.remainingTime = this.timerInput;
  this.isRunning= true;
 this.timerSubscription= interval(this.interval).subscribe((count) => {this.remainingTime = this.timerInput - count;
 if (this.remainingTime <= 0){this.stopTimer(); this.remainingTime=0; this.timerInput=0; this.hasfinished=true;}})
}

  stopTimer():void{
this.timerSubscription?.unsubscribe();
this.isRunning=false;
  }

}

