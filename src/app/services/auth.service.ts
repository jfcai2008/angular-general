import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly base_url = "http://192.168.2.19:6002/"
  constructor(private _http: HttpClient) { }

  public login(username:string, password:string) {
    let url = `${this.base_url}/login`

    let http = this._http
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set("Access-Control-Allow-Origin", "*")
    };
    return new Promise(function (resolve, reject) {
      let param = { "userName": username, "userPass": password }
      console.log(param)
      http.post(url, param, httpOptions).subscribe(
        data => {
          console.log(data)
          resolve(data)
        },
        err => { console.log(err); });
    })
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (sessionStorage.getItem('access_token') !== null);
  }

  // login2(params:any) {
  //   let http = this._http;
  //   let url = `${this.base_url}login`
  //   console.log(`DataFetcherService==>Login:${url}`)
  //   let httpOptions = {
  //     headers: new HttpHeaders().set('Content-Type', 'application/json').set("Access-Control-Allow-Origin", "*")
  //   };
  //   return new Promise(function (resolve, reject) {
  //     let param = { "userName": params.userName, "userPass": params.userPass, "dataFrom": params.where }
  //     console.log(param)
  //     http.post(url, param, httpOptions).subscribe(
  //       data => {
  //         console.log(data)
  //         sessionStorage.setItem('access_token', data["token"]);
  //         resolve(data)
  //       },
  //       err => { console.log(err); });

  //     //http.post(url,{userName:params.userName,userPass:params.userPass},httpOptions).subscribe(data => { resolve(data)  }, err => {  console.log(err);  });
  //   })
  // }
}