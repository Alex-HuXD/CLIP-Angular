import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  Input,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  //add type safty to tabs
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  // second solution is to make this value optional with ? make
  // @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    activeTabs.length === 0
      ? this.selectTab(this.tabs.first)
      : this.selectTab(activeTabs[0]);
  }

  selectTab(target: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.tabTitle === target.tabTitle
        ? (tab.active = true)
        : (tab.active = false);
    });

    //simple way to prevent the default behavior
    return false;
  }

  // assign css class to tab
  assignClass(tab: TabComponent) {
    return {
      'hover:text-indigo-400': !tab.active,
      'text-white bg-indigo-400': tab.active,
    };
  }
}
