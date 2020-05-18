import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Soldier} from './models/soldier';
import {Alien} from './models/alien';

@Injectable({
  providedIn: 'root'
})
export class SoldiersService {

  private apiUrl = 'http://localhost:8010/v1/soldiers';
  private apiUrlRandomSoldier = 'http://localhost:8010/v1/soldiers/random';
  private apiRanks = 'http://localhost:8010/v1/ranks/images';

  constructor(private http: HttpClient) { }

  getSoldiers(): Observable<Soldier[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(aliens => aliens as Soldier[]));
  }

  getSoldier(id: number): Observable<Soldier> {
    return this.http.get(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Soldier));
  }

  addSoldier(data): Observable<Soldier> {
    return this.http.post(this.apiUrl, data)
      .pipe(map((res) => res as Soldier));
  }

  addRandomSoldierByRank(data): Observable<Soldier> {
    const httpParams = new HttpParams().set('rank', data);
    return this.http.post(this.apiUrlRandomSoldier, httpParams)
      .pipe(map((res) => res as Soldier));
  }

  updateSoldier(id: number, data): Observable<Soldier> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .pipe(map((res) => res as Soldier));
  }

  removeSoldier(id: number): Observable<Soldier> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .pipe(map((res) => res as Soldier));
  }

  getImage(rank: string): Observable<Blob> {
   // const httpParams = new HttpParams().set('rank', rank);
    return this.http.get(this.apiRanks + `/${rank}`, { responseType: 'blob'} );
  }

  deleteAll(): Observable<Soldier> {
    return this.http.delete(this.apiUrl)
      .pipe(map((res) => res as Soldier));
  }
}
