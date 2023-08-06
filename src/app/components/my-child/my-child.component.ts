import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.scss'],
})
export class MyChildComponent {
  @Input() users: any = [];

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const { user } = change;
    console.log(user)
  }
}
