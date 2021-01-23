import { Component, OnInit } from '@angular/core';
import {Config} from '../../app.config'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  config:any = Config;
  constructor(){
    console.log(Config)
  }

  ngOnInit(): void {
  }

}
