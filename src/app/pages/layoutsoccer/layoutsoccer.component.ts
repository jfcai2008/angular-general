import { Component, OnInit } from '@angular/core';
import {Config} from '../../app.config'
@Component({
  selector: 'app-layoutsoccer',
  templateUrl: './layoutsoccer.component.html',
  styleUrls: ['./layoutsoccer.component.scss']
})
export class LayoutsoccerComponent implements OnInit {
  isCollapsed = false;
  config:any = Config;
  constructor() { }

  ngOnInit(): void {
  }

}
