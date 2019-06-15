import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  template: `
    <img src='{{user?.picture.large}}' />
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  private users$;

  private user;
  private userId:string;
  myRout: ActivatedRoute;
  subscription: Subscription;
  
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router){
    this.myRout = route;
  } 

  ngOnInit(): void {
    this.subscription = this.myRout.params.subscribe((param: any) => {
        this.userId = param['uuid'];
        this.getData();
      }
    );
  }

  async getData() {
      try {
          this.users$ = this.dataService.getCashedData();
          const users = await this.users$.toPromise();
          const jsonObj = JSON.parse(JSON.stringify(users));
          this.user = jsonObj.find(u => u.login.uuid === this.userId);
          this.users$.subscribe().unsubscribe();
      } catch (error) {
          console.log(error);
      }
  }
}
