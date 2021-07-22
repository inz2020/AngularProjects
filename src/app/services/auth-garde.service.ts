import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
@Injectable()
//Le service  AuthGardeService permet de proteger nos routes appreils et appareilsView; et donc ce service sera injecté dans leur path
export class AuthGardeService implements CanActivate {
  constructor(private authService: AuthentificationService, private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthen) {
      return Promise.resolve(true);
    } else {
      this.route.navigate(['/authentification']);
    }
    return Promise.reject(false);

  }

}
//Les observables sont des objets qui emettent des infos dans le temps par exemple la progression du chargement d'un fichier

