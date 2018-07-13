import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  imageSources: any[];
  constructor() { }

  ngOnInit() {
    this.imageSources = [
      '../../../assets/imagenes/gato.png',
      '../../../assets/imagenes/tigre.jpg',
      '../../../assets/imagenes/leon.jpg',
      '../../../assets/imagenes/lobo.jpg'
    ];
  }

}
