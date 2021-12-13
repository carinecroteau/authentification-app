import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authentificationService : AuthentificationService) {}

  login(nomUtilisateur:string, motDePasse: string) {
    this.authentificationService.login(nomUtilisateur, motDePasse).subscribe();
  }

  getInformationsUtilisateur() {
    console.log('appel de la méthode getInformationsUtilisateur()');
    this.authentificationService.getInfosUtilisateur().subscribe(reponse => console.log(reponse));
  }
}
