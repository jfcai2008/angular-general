import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-tabbedpage',
  templateUrl: './tabbedpage.component.html',
  styleUrls: ['./tabbedpage.component.scss']
})
export class TabbedpageComponent implements OnInit {
  @Input() upStyle: any//= { 'height': '400px' }//外部组件输入的样式对象
  @Input() downStyle: any;
  @Input() tabs: any = [];

  @Output() tabHitted = new EventEmitter();
  tabIndex: any = 0
  constructor() { }

  ngOnInit(): void {
  }

  tabClick() {
    // console.log(this.tabIndex)
    this.tabHitted.emit(this.tabIndex)
  }
}
