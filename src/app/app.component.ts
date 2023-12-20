import { Component, OnDestroy, OnInit } from '@angular/core';
import Snowflakes from "magic-snowflakes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pandoras-food';

  snowflakes = new Snowflakes();

  ngOnInit(): void {
    this.snowflakes.start();
  }

  ngOnDestroy(): void {
    this.snowflakes.stop();
  }
}
