import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  user: string;
  name: string;

  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem('userName');
    this.user = localStorage.getItem('user');
  }

}
