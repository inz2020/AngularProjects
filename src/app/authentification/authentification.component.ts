import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  authenStatus!:boolean;

  constructor(private authenService:AuthentificationService, private router:  Router) { }

  ngOnInit(): void {
    this.authenStatus= this.authenService.isAuthen;
  }
  onSignIn(){
    this.authenService.signIn().then(
      ()=>{
        this.authenStatus= this.authenService.isAuthen;
        this.router.navigate(['appareils']);
      }
    );
  }
  onSignOut(){
    this.authenService.signOut();
    this.authenStatus= this.authenService.isAuthen;
  }

}
