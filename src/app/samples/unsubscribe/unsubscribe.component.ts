import { Component } from '@angular/core';

@Component({
  selector: 'app-unsubscribe',
  template: `
    <h3>Unsubscribe Alternatives</h3>
    <p>Click the buttons to change example.</p>
    <p>Open console to see output.</p>

    <button (click)="toggle('leaky')" type="text">Memory Leak</button>
    <button (click)="toggle('asyncPipe')" type="text">AsyncPipe</button>
    <button (click)="toggle('takeUntil')" type="text">takeUntil</button>
    <button (click)="toggle('takeWhile')" type="text">takeWhile</button>
    <button (click)="toggle('autoUnsubscribe')" type="text">AutoUnsubscribe</button>
    <button (click)="toggle('subSink')" type="text">SubSink</button>
    <button (click)="ex='close'" type="text">Close</button>

    <div [ngSwitch]="ex">
      <app-leaky *ngSwitchCase="'leaky'"></app-leaky>
      <app-auto-unsubscribe *ngSwitchCase="'autoUnsubscribe'"></app-auto-unsubscribe>
      <app-sub-sink *ngSwitchCase="'subSink'"></app-sub-sink>
      <app-async *ngSwitchCase="'asyncPipe'"></app-async>
      <app-take-until *ngSwitchCase="'takeUntil'"></app-take-until>
      <app-take-while *ngSwitchCase="'takeWhile'"></app-take-while>
    </div>
  `,
})
export class UnsubscribeComponent {
  ex: string;

  toggle(name: string) {
    this.ex = this.ex === name ? '' : name;
  }
}
