import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private users$: Observable<Object>

  constructor(private httpClient: HttpClient) { }

  public getOnlineData() : Observable<Object>{
    return this.httpClient.get("https://randomuser.me/api/?results=10");
  }

  public getCashedData(): Observable<any>{
    const data$ = Observable.create(
      (observable) => { 
        observable.next(JSON.parse(localStorage.getItem("users")));
        observable.complete();
      }
      ).pipe(
        map((body: any) => body.results),
        shareReplay(1)
      )
    return data$;
  }
}
