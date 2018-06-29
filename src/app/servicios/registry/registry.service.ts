import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class RegistryService {

  constructor(private http: HttpClient) {

  }

}
