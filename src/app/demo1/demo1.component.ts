import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
})
export class Demo1Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Angular';
  btnText = 'Subscribe';
  isSubscribed = false;

  subscribe() {
    this.isSubscribed = true;
    this.btnText = 'Subscribed';
  }
}
