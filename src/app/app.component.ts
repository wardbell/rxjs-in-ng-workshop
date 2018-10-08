import { Component } from '@angular/core';
import { SwUrlService } from './samples/sw-url.service';

console.log(`
  ************
  Do not worry about the style.css warnings which concern that IE can't handle the 'auto-fit'
  in styles such as 'grid-template-columns: repeat( auto-fit, minmax(50px, 1fr));'
  Will clean this up eventually.
  *************
`);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private swUrlService: SwUrlService) {}

  toggleSwUrl() {
    this.swUrlService.toggleUrl();
  }
}
