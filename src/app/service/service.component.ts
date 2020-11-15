import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = ' Iv1.743819f19d51b179';
  private clientsecret = ' 2fe0d00c03c25d6a26ee2cc2169270a3ddbd77da';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'Alikhalid2020';
  
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token' + environment.IPI);
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token' + environment.IPI);
  }

  updateProfile(username: string) {
   this.username = username;
  }
}