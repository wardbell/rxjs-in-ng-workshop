import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RawComponent } from './raw.component';
import { Raw01Component } from './raw-01.component';
import { Raw02Component } from './raw-02.component';
import { Raw03Component } from './raw-03.component';
import { Raw04Component } from './raw-04.component';
import { Raw05Component } from './raw-05.component';
import { Raw06Component } from './raw-06.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    RawComponent,
    Raw01Component,
    Raw02Component,
    Raw03Component,
    Raw04Component,
    Raw05Component,
    Raw06Component,
  ],
  exports: [
    RawComponent
  ]
})
export class RawModule { }
