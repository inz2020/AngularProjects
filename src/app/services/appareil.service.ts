import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import Any = jasmine.Any;
@Injectable()
export class AppareilService {
  appareilSubject = new Subject<any[]>();

  private appareils = [
    {id: 1, name: 'Machine à laver', status: 'allumé'},

    {id: 2, name: 'Télévision', status: 'allumé'},

    {id: 3, name: 'Ordinateur', status: 'eteint'}

  ];
  constructor(private httpClient:HttpClient) {
  }
//C'est la methode  qui va emettre la liste des appareils
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  //  Methde permettant d'allumer tous les appareils
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    //Une fois la manipulation de l'appareil, on va faire emettre le subject
    // comme cela les components qui sont suscrits à ce component verront le changement automatiquement
    this.emitAppareilSubject();
  }

  //  Methde permettant d'eteindre tous les appareils
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'eteint';
    }
    this.emitAppareilSubject();
  }

  //  Methde permettant d'allumer un appareil
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  //  Methde permettant d'eteindre un appareil
  switchOffOne(index: number) {
    this.appareils[index].status = 'eteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0 , name: '', status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();

  }
  saveAppareilstoServer(){
    this.httpClient.put('https://angular-httpclient-demo1-default-rtdb.firebaseio.com/appareils.json',
      this.appareils).subscribe(
      ()=>{
        console.log('Enregistrement terminé');
      },
      (error)=>{
        console.log('Erreur de sauvegarde'+ error);
      }
    );
  }

  getAppareilsFromServer(){
    this.httpClient.get<Any[]>('https://angular-httpclient-demo1-default-rtdb.firebaseio.com/appareils.json')
      .subscribe(
      (response)=>{
        this.appareils= response;
        //Faire un emit sinon on ne verra pas le changement
        this.emitAppareilSubject();
      },
      (error)=>{
        console.log('Erreur de chargement'+ error);
      }
    );
  }

}
