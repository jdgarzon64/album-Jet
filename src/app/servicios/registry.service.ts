import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class RegistryService {

  constructor(private http: HttpClient) {

  }

}
