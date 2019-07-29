import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Pastilla } from '../models/pastilla.model';

@Component({
  selector: 'app-pastillero',
  templateUrl: './pastillero.component.html',
  styleUrls: ['./pastillero.component.css']
})
export class PastilleroComponent implements OnInit {
  @Input() pasta: Pastilla;
  @HostBinding('attr.class') cssClass = 'col-4 tarjeta';

  constructor() {
  }

  ngOnInit() {
  }

}
