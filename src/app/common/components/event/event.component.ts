import { Component, Input } from '@angular/core';
import { ScossEvent } from '../../models';

@Component({
  selector: 'scoss-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  // public event: ScossEvent = {
  //   name: 'Recuritment Drive for Grads',
  //   img: '/images/hire.webp',
  //   alt: 'Recuritment',
  //   isCompleted: false
  // };
  @Input() public event!: ScossEvent;

  public get Status(): string {
    return this.event.isCompleted ? 'event completed' : 'upcoming';
  }
}
