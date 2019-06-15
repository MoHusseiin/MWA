import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  isUserExist(id: string): boolean {
    try {
      console.log("sxs  "+id);
      let exist = false;
      this.getCashedData().subscribe((data) => {
        const user = data.find(u => u.login.uuid === id);
        console.log("user=  "+user);
        if(user) {
          exist = true;
        }
      });
      return exist;
    } catch (error) {
      console.log("error "+error);
      return false;
    }
  }

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
