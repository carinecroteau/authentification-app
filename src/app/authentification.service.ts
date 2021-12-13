import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  login(nomUtilisateur:string, motDePasse: string) {
    const httpOptions = {
      
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post('http://localhost:3000/users/login', {nomUtilisateur:nomUtilisateur, motDePasse:motDePasse}, {withCredentials: true})
  }

  getInfosUtilisateur():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/users', {withCredentials: true});
  }
}
