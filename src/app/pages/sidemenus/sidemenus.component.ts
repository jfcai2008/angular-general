import { Component, OnInit } from '@angular/core';
import {MainRoutes} from '../../app.menu';

@Component({
  selector: 'app-sidemenus',
  templateUrl: './sidemenus.component.html',
  styleUrls: ['./sidemenus.component.scss']
})
export class SidemenusComponent implements OnInit {
  menus:any = MainRoutes;
  isCollapsed = false;
  constructor() {
   }

  ngOnInit(): void {
  }

}
