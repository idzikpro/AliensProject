import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ship} from './models/ship';
import {map} from 'rxjs/operators';
import {Craft} from './models/craft';
import {Alien} from './models/alien';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  private apiUrl = 'http://51.91.157.25:8010/v1/craft';
  private apiUrlShipByName = 'http://51.91.157.25:8010/v1/craft/random';

  constructor(private http: HttpClient) { }

  getCrafts(): Observable<Craft[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(aliens => aliens as Craft[]));
  }

  getCraft(id: number): Observable<Craft> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Craft));
  }

  addCraft(data): Observable<Craft> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res) => res as Craft));
  }

  addCraftByName(data): Observable<Craft> {
    const httpParams = new HttpParams().set('name', data);
    return this.http.post(this.apiUrlShipByName, httpParams)
      .pipe(map((res) => res as Craft));
  }

  updateCraft(id: number, data): Observable<Ship> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res) => res as Ship));
  }

  removeCraft(id: number): Observable<Ship> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Ship));
  }

  deleteAll(): Observable<Craft> {
    return this.http.delete(this.apiUrl)
      .pipe(map((res) => res as Craft));
  }
}
