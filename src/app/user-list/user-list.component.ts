import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {UserModel} from '../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users!:UserModel[];
  userSubscription!:Subscription;

  constructor(private userService:UserService, private route:Router) { }

  ngOnInit(): void {
    this.userSubscription= this.userService.userSubject.subscribe(
      (users:UserModel[]) =>{
        this.users= users;
      }
    );
    this.userService.emitUsers();
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
