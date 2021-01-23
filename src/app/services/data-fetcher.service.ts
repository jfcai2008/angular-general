import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  //readonly base_url = "http://192.168.3.158:6002/"
  //readonly base_url = "http://wmcp.vicp.net/"
  base_url: any = "http://jfcai.wicp.net/"

  constructor(private _http: HttpClient, private location: PlatformLocation) {
    let url = this.location.href
    let ln = this.location.hostname

    if (ln == '127.0.0.1' || ln == '192.168.3.158' || ln == 'localhost') {
      this.base_url = `http://${ln}:6002/`
    }
    else if (ln == 'wmcp.vicp.net') {
      //在花生壳上做的映射
      this.base_url = "http://jfcai.wicp.net/"
    }
    else {
      this.base_url = `http://${ln}:6002/`
    }
  }

  tokenGetter() {
    let tk = sessionStorage.getItem('access_token');
    if (!tk) {
      tk = "youarenotpermittovisitthiswebpleaseloginwithyouridandpwd"
    }
    //console.log(tk)
    return tk
  }

  public GetServerDatas(params: any) {
    let http = this._http;
    let url = `${this.base_url}${params.api}`
    //console.log(`----DataFetcherService:${url}`)
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set("Access-Control-Allow-Origin", "*")
        .set("Authorization", this.tokenGetter()).set("Service-Name", "soccerApi")
    };
    //console.log(httpOptions)
    return new Promise(function (resolve, reject) {
      http.get(url, httpOptions).subscribe(data => { resolve(data) }, err => { console.log(err); });
    })
  }


  public SaveData2Server(params: any) {
    let http = this._http;
    let url = `${this.base_url}${params.api}`
    //console.log(`DataFetcherService==>${params.api}`)
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set("Access-Control-Allow-Origin", "*").set("Service-Name", "soccerApi")
    };
    return new Promise(function (resolve, reject) {
      let param = params
      http.post(url, param, httpOptions).subscribe(data => { resolve(data) }, err => { console.log(err); });

      //http.post(url,{userName:params.userName,userPass:params.userPass},httpOptions).subscribe(data => { resolve(data)  }, err => {  console.log(err);  });
    })
  }


  //如果设置如下header,nodejs收到后，bodyparser解析后内容不符。
  //.set('Content-Type', 'application/x-www-form-urlencoded')
  public Login(params: any) {
    let http = this._http;
    let url = `${this.base_url}${params.api}`
    console.log(`DataFetcherService==>Login:${url}`)
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set("Access-Control-Allow-Origin", "*").set("Service-Name", "soccerApi")
    };
    return new Promise(function (resolve, reject) {
      //let param ={"userName":params.userName,"userPass":params.userPass}
      http.post(url, params, httpOptions).subscribe(data => { resolve(data) }, err => { console.log(err); });

      //http.post(url,{userName:params.userName,userPass:params.userPass},httpOptions).subscribe(data => { resolve(data)  }, err => {  console.log(err);  });
    })
  }

}
