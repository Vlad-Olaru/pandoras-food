import { Component, OnInit } from '@angular/core';
import { MenuService } from "../shared/menu.service";
import { Menu } from "../shared/menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  // @ts-ignore
  menu: Menu = {};

  constructor(private menuService: MenuService) {
  }

  currentDate = this.menuService.getWeekInfo();

  ngOnInit(): void {
    this.menuService.getMenuForCurrentWeek().subscribe(
      // @ts-ignore
        thisWeekMenu => this.menu = thisWeekMenu
    );
  }
}
