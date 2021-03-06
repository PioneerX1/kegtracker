import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <h3>{{childSelectedKeg.name}} | <em>Alcohol Content: {{childSelectedKeg.alcoholContent}}</em></h3>
    <h4>{{childSelectedKeg.brand}}</h4>
    <label>Enter new price:</label>
    <input [(ngModel)]="childSelectedKeg.price" type="number">
    <button (click)="refilleKegClicked(childSelectedKeg)">Refill Keg</button>

    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  refilleKegClicked(childSelectedKeg) {
    childSelectedKeg.pints=124;
  }
}
