import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgZone } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class AppToolsService {
  format_date_len10(date: Date): string {
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();

    if (month <= 9) {
      month = "0" + month;
    }

    if (strDate <= 9) {
      strDate = "0" + strDate;
    }

    return date.getFullYear() + "-" + month + "-" + strDate
  }

  //获得距现在几个月之前的某个日期，10位字符格式
  get_startTime_fromNow(month_before: number): string {
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()
    let date = today.getDate()

    let tmp = month - month_before
    if (tmp < 0) {
      tmp = tmp + 12
      year = year - 1
    }
    let dd = new Date(year, tmp, date)
    let time = this.format_date_len10(dd)
    return time
  }

  saveValue(item: string, value: any) {
    sessionStorage.setItem(item, value)
  }
  getValue(item: string) {
    return sessionStorage.getItem(item)
  }
  removeItem(item: string) {
    sessionStorage.removeItem(item)
  }

  addmonth(d: Date, m: number) {
    d.setMonth(d.getMonth() + m)
    return d
  }
  addyear(d: Date, m: number) {
    d.setFullYear(d.getFullYear() + m)
    return d
  }
  addday(d: Date, m: number) {
    d.setDate(d.getDate() + m)
    return d
  }
  // 在日期上加减小时的操作，date日期类型参数
  AddHours(date: Date, value: number) {
    let d = new Date(date)
    d.setHours(d.getHours() + value)
    return d
  }

  AddDays(date: Date, value: number) {
    let d = new Date(date)
    d.setDate(d.getDate() + value)
    return d
  }
}
