import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit{
  isAuthen = false;
  /* Applicatiion du pipe asynchrone: au lieu d'obtenir une date disponible à l'immediat on va faire obtenir la date au bout d e2 secondes*/
  // @ts-ignore
  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject)=>{
      const date= new Date();
      setTimeout(()=>{
        resolve(date);}, 2000);
    } );
  appareils!:any[];
  appareilSubscription!: Subscription;


  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = ' Ordinateur';

  constructor(private appareilService: AppareilService) {
    /* ///Lier le status du bouton allumer au status authentification de l'user
  //Creation d'une timeout qui va modifier la valeur de isAuthen au bout de quelques secondes(4secon)*/

    setTimeout( () => {
      this.isAuthen = true; }, 4000);
  }
  ngOnInit() {
    this.appareilSubscription=this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=>{
        this.appareils= appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();

  }

  onSave() {
    this.appareilService.saveAppareilstoServer();

  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
