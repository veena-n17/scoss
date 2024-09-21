import { Component, Input } from '@angular/core';
import { GalleryUnit } from '../../models';

@Component({
  selector: 'scoss-gallery-unit',
  templateUrl: './gallery-unit.component.html',
  styleUrl: './gallery-unit.component.scss'
})
export class GalleryUnitComponent {
  @Input({ required: true }) public input!: GalleryUnit;
}
