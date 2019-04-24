import { Component } from '@angular/core';
import {Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Home Page of this Application';
  constructor(public router: Router)
  {

  }
}

