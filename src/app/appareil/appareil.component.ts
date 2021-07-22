import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


  @Input() appareilName!: string;

  @Input() appareilStatus!: string;

  @Input() indexOfAppareil!: number;
  @Input() id!: number;

  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }

    getStatus() {
      return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus==='allumé'){
      return 'green'
    }
    else(this.appareilStatus==='eteint')
    {
      return 'red'
    }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
//Un operateur se place entre un observable et la suscription, ces operateurs permettent de filttrer ou editer les données emises par l'observable avant meme qu'elle arrive à la suscription
//Exemple d'operateurs: map(), filter(), throttleTime(), sv=can et reduce
