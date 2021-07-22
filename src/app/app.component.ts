import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy{
  //Variable secondes correspondant au nbre de fois que l'user s'est connecté
  secondes!: number;
  counterSubScription!: Subscription;
  constructor() {
  }

  ngOnInit(): void {
    //Creation d'un observable qui emettra un chiffre toutes les secondes

    const counter= Observable.interval(1000);
    //Pour eviter un comportement infini
    this.counterSubScription=counter.subscribe(
      (value => {
        this.secondes=value;
      })
    );
  }
  // Detruiire la subscription à la fin de la vie du component
  ngOnDestroy(){
    this.counterSubScription.unsubscribe();
  }
}

