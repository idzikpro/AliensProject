import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Alien} from './models/alien';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AliensService {
  private apiUrl = 'http://localhost:8010/v1/aliens';
  private apiUrlRandomAlien = 'http://localhost:8010/v1/aliens/random';

  constructor(private http: HttpClient) { }

  getAliens(): Observable<Alien[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(aliens => aliens as Alien[]));
  }

  getAlien(id: number): Observable<Alien> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Alien));
  }

  addAlien(data): Observable<Alien> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res) => res as Alien));
  }

  addRandomAlien(breed: string , rank: string): Observable<Alien> {
    const httpParams = new HttpParams().set('race', breed).set('rank', rank);
    return this.http.post(this.apiUrlRandomAlien, httpParams)
      .pipe(map((res) => res as Alien));
  }

  updateAlien(id: number, data): Observable<Alien> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res) => res as Alien));
  }

  removeAlien(id: number): Observable<Alien> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Alien));
  }

  deleteAll(): Observable<Alien> {
    return this.http.delete(this.apiUrl)
      .pipe(map((res) => res as Alien));
  }
}
