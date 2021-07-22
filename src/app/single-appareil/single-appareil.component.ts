import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string='Appareil';
  status: string='Statut';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    //On ajoute le + devant le id car la constante id retournée est de type string
    // @ts-ignore
    this.name= this.appareilService.getAppareilById(+id).name;

    // @ts-ignore
    this.status= this.appareilService.getAppareilById(+id).status;
  }

}
