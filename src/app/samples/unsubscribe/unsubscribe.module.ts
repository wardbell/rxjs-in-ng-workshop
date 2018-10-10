import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeComponent } from './async-pipe.component';
import { AutoUnsubscribeComponent } from './auto-unsubscribe.component';
import { LeakyComponent } from './leaky.component';
import { SubSinkComponent } from './sub-sink.component';
import { TakeUntilComponent } from './take-until.component';
import { TakeWhileComponent } from './take-while.component';
import { UnsubscribeComponent } from './unsubscribe.component';

// Not used
import { CompAliveComponent } from './comp-alive.component';
import { CompAliveObsComponent } from './comp-alive-obs.component';

const expimp = [
  AsyncPipeComponent,
  AutoUnsubscribeComponent,
  LeakyComponent,
  SubSinkComponent,
  TakeUntilComponent,
  TakeWhileComponent,
  UnsubscribeComponent,

  // Not used
  CompAliveComponent,
  CompAliveObsComponent,
]

@NgModule({
  imports: [ CommonModule ],
  declarations: expimp,
  exports: expimp
})
export class UnsubscribeModule {}

