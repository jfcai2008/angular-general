import { Component, OnInit } from '@angular/core';
import {tablelist} from '../../datas/tables.tab';

import {example_datas} from '../../datas/examples'
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tabs:any = tablelist;
  currentTab:any =0;
  examples:any = example_datas;
  constructor() { 
    console.log(this.tabs)
  }

  ngOnInit(): void {
  }
  whenTabChanged(evt:any){
    console.log(evt)
    this.currentTab=evt
  }
}
