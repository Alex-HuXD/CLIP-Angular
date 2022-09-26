import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  
  //add type safty to tabs
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()
  
  // second solution is to make this value optional with ? make
  // @ContentChildren(TabComponent) tabs?: QueryList<TabComponent> 

  constructor() {}

  ngOnInit(): void {  
  }

  ngAfterContentInit() {
  }
}
