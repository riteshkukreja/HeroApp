import { Component } from '@angular/core';

import { Nav } from './interfaces/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   navs: Nav[] = [
    {
      link: '/',
      title: 'dashboard'
    },
    {
      link: '/heroes',
      title: 'Heroes'
    }
  ];
}


