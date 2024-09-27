import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl: string = "https://api.restful-api.dev/objects";
  constructor(
    private http: HttpClient
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'dasdasdsa',
  })

  getObj(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseUrl).pipe(
      map((objects: Object[]) => objects.filter(obj => obj.name.toLowerCase().includes('apple'))),
      take(1)
    );
  }

  getObj2(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseUrl).pipe(
      take(1)
    );
  }

  fork() {
    return forkJoin([this.getObj(), this.getObj2()])
  }
}


interface Object {
  id: number;
  name: string;
  data: Data;
}

interface Data {
  price: number;
  color: string;
}