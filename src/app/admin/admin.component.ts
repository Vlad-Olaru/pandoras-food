import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuService } from "../shared/menu.service";
import { DayWithOptions, Menu } from "../shared/menu";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  currentDate = this.menuService.getWeekInfo();
  menuForm = new FormGroup({
    monday: new FormGroup({
      foodMenu: new FormControl(''),
      closed: new FormControl(false),
      foodFinished: new FormControl(false)
    }),
    tuesday: new FormGroup({
      foodMenu: new FormControl(''),
      closed: new FormControl(false),
      foodFinished: new FormControl(false)
    }),
    wednesday: new FormGroup({
      foodMenu: new FormControl(''),
      closed: new FormControl(false),
      foodFinished: new FormControl(false)
    }),
    thursday: new FormGroup({
      foodMenu: new FormControl(''),
      closed: new FormControl(false),
      foodFinished: new FormControl(false),
    }),
    friday: new FormGroup({
      foodMenu: new FormControl(''),
      closed: new FormControl(false),
      foodFinished: new FormControl(false)
    })
  });
  selectedTheme: string = 'cmyk';

  constructor(private menuService: MenuService,
              private toastr: ToastrService) {
    this.loadDataForSelectedWeek();
  }

  updateMenuForWeek() {
    const menu: Menu = {
      monday: this.menuForm.controls.monday.value as DayWithOptions,
      tuesday: this.menuForm.controls.tuesday.value as DayWithOptions,
      wednesday: this.menuForm.controls.wednesday.value as DayWithOptions,
      thursday: this.menuForm.controls.thursday.value as DayWithOptions,
      friday: this.menuForm.controls.friday.value as DayWithOptions
    };

    this.menuService.createMenuForCurrentWeek(menu);
    this.toastr.success('Meniu actualizat cu succes!');
  }

  updateTheme() {
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
  }

  decreaseWeek() {
    this.menuService.currentDate.setDate(this.menuService.currentDate.getDate() - 7);
    this.currentDate = this.menuService.getWeekInfo();
    this.loadDataForSelectedWeek();
  }

  increaseWeek() {
    this.menuService.currentDate.setDate(this.menuService.currentDate.getDate() + 7);
    this.currentDate = this.menuService.getWeekInfo();
    this.loadDataForSelectedWeek();
  }

  private loadDataForSelectedWeek() {
    this.menuService.getMenuForCurrentWeek().subscribe((menu: any) => this.menuForm.patchValue(menu));
  }
}
