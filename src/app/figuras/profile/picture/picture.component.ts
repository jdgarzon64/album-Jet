import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() pathImage: string;

  constructor() {
   // this.pathImage = "../../../../assets/imagenes/lobo.jpg"
  }

  ngOnInit() {
  }

}
