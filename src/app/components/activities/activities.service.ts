import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  dummy: () => `https://dummyapi.io/data/api/user?page=4limit=5`,
};

const httpHeaders: HttpHeaders = new HttpHeaders({
  'app-id': '600cdfdd15c37b3260d7206e'
}); 

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private httpClient: HttpClient) { }

  getPeople(): Observable<string> {
    return this.httpClient.get(routes.dummy(),{ headers: httpHeaders }).pipe(
      map((body: any) => body),
      catchError(() => of('Error:('))
    );
  }
}
