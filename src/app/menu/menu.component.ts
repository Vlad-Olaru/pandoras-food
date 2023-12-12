import { Component, OnInit } from '@angular/core';
import { MenuService } from "../shared/menu.service";
import { Menu } from "../shared/menu";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  // @ts-ignore
  menu: Menu = {};

  constructor(private menuService: MenuService,
              private spinner: NgxSpinnerService) {
  }

  currentDate = this.menuService.getWeekInfo();

  ngOnInit(): void {
    this.spinner.show().then();
    this.menuService.getMenuForCurrentWeek().subscribe(thisWeekMenu => {
      // @ts-ignore
      this.menu = thisWeekMenu;
      this.spinner.hide().then();
      }
    );
  }
}
