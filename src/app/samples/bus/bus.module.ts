import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusContainerComponent } from './bus-container.component';
import { BlueComponent } from './blue.component';
import { GreenComponent } from './green.component';
import { RedComponent } from './red.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BusContainerComponent,
    BlueComponent,
    GreenComponent,
    RedComponent
  ],
  exports: [BusContainerComponent]
})
export class BusModule {}
