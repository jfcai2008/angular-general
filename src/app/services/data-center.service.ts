import { Injectable } from '@angular/core';
import { DataFetcherService } from './data-fetcher.service';

// service 目前可以大致理解为处理业务的脚本文件
// 服务是 Angular 应用的重要组成部分。在 Angular 中，服务是一个类的实例，它可以借助 Angular 的依赖注入系统来让应用中的任何一个部件都能使用它。
// 服务可以让你在应用的各个部件之间共享数据。对于在线商店，购物车服务就是存放购物车的数据和方法的地方。

@Injectable({
  providedIn: 'root'
})
export class DataCenterService {
  public loginId: any;
  public userLogined: any = false;
  constructor(private dataFetcher: DataFetcherService) {
  };

  public GetLeagueParams = async () => {
    const apiUrl = `soccer-api?act=league_infos`;
    const dds = await this.dataFetcher.GetServerDatas({ api: apiUrl });

    return dds;
  }
  public GetTeamParams = async () => {
    const apiUrl = `soccer-api?act=team_infos`;
    const dds = await this.dataFetcher.GetServerDatas({ api: apiUrl });

    return dds;
  }
  public GetCountryTeams = async (par: any) => {
    const apiUrl = `soccer-api?act=GetTeams&flag=${par.flag}&value=${par.value}`;
    const dds = await this.dataFetcher.GetServerDatas({ api: apiUrl });

    return dds;
  }
  public getTeams = async (info: any) => {
    const url = `soccer-api/get_teams`;
    const params = info;
    params.api = url;
    const res = await this.dataFetcher.SaveData2Server(params);
    return res;
  }
  public getTeamMatches = async (info: any) => {
    let act = info.isOwner ? "GetOwnerMatches" : "GetGuestMatches";
    const url = `soccer-api?act=${act}&lotteryItem=${info.lotteryItem}&stakeOrder=${info.stakeOrder}`;
    const dds = await this.dataFetcher.GetServerDatas({ api: url });

    return dds;
  }
  public getTeamMatchesById = async (info: any) => {
    const apiUrl = `soccer-api?act=GetMatches&OwnerBID=${info.OwnerBID}&GuestBID=${info.GuestBID}`;
    // 获取数据
    const dds = await this.dataFetcher.GetServerDatas({ api: apiUrl });
    return dds
  }

  public GetLeagueMatches = async (par: any) => {
    const apiUrl = `soccer-api?act=league_matches&continent=${par.continent}&country=${par.country}&cup=${par.cup}&season=${par.season}`;
    const dds = await this.dataFetcher.GetServerDatas({ api: apiUrl });

    return dds;
  }
  // public login = async (params: any) => {
  //   const url = `soccer-api/login`;
  //   const par = { user_id: params.user_id, user_pw: params.user_pw, api: url };
  //   const res = await this.dataFetcher.Login(par);
  //   return res;
  // }
  async login (params: any) :Promise<any> {
    const url = `soccer-api/login`;
    const par = { user_id: params.user_id, user_pw: params.user_pw, api: url };
    const res = await this.dataFetcher.Login(par);
    return res;
  }
  public logout = () => {
    this.loginId = '';
    this.userLogined = false;
    this.removeItem('access_token');
  }
  saveValue(item: any, value: any) {
    sessionStorage.setItem(item, value);
  }
  getValue(item: any) {
    return sessionStorage.getItem(item);
  }
  removeItem(item: any) {
    sessionStorage.removeItem(item);
  }
  saveObject(item: string, obj: any) {
    sessionStorage.setItem(item, JSON.stringify(obj));
  }
  getObject(item: string) {
    let obj = sessionStorage.getItem(item);
    let str = obj != null ? obj.toString() : ''
    return JSON.parse(str);
  }
}
