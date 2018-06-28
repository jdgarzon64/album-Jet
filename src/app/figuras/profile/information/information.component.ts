import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../modelo/User';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  @Input() currentUser: User;

  constructor() { }

  ngOnInit() {
  }

}
