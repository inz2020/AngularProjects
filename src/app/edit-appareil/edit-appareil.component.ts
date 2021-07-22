import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../services/appareil.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
  defaultOnOff = 'éteint';

  constructor(private appareilService: AppareilService, private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {
   // console.log(f.value);
    //  Recuperation des champs name et status
    const name= f.value['name'];
    const status=f.value['status'];

    this.appareilService.addAppareil(name, status)
    //Rediger l'user vers la page appareils une fois un appareil ajouté
    this.router.navigate(['/appareils']);

  }


}
