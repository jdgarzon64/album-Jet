import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { STICKERS } from '../../../environments/mocks/mock-stickers';
import { Sticker } from '../../modelo/Sticker';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaginationService {

  stickersList: Sticker[];
  paginaActual: any[];
  constructor(private http: HttpClient) {
    this.stickersList = STICKERS;
  }
  getStickers(): Observable<Sticker[]> {
    return of(STICKERS);
  }

  getPage(index: number): Observable<Sticker[]> {
    // return this.listaFiguras.slice(index: number,index: number);
    return of (this.stickersList.slice(((index) * 6) - 6 , ((index) * 6)));
  }
}
