export class  AuthentificationService {
  //le bouton isAuthen pour se connecter ou deconnecter
  isAuthen= false;
  //Methode pour se connecter
  signIn() {
    //Pour simuler le temps de connexion, on va utiliser une methode asynchrone
    // @ts-ignore
    return new Promise(
      (resolve, reject) => {
      setTimeout(
        ()=>{this.isAuthen=true;resolve(true);},
        2000);
      })
  }
  //Pour simuler le temps de déconnexion, on va utiliser une methode asynchrone
  signOut() {
    this.isAuthen=true;}



}
