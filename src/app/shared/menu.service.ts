import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Menu } from "./menu";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private firestore: AngularFirestore) {
    this.updateCurrentDateDaily();
  }

  currentDate: Date = new Date();

  getMenuForCurrentWeek() {
    return this.firestore.collection('menu')
        .doc(this.currentDate.getFullYear() + ' - ' + this.getWeekInfo().weekNumber.toString())
        .valueChanges();
  }

  createMenuForCurrentWeek(menu: Menu) {
    this.firestore.collection('menu')
      .doc(this.currentDate.getFullYear() + ' - ' + this.getWeekInfo().weekNumber.toString())
      .set(menu, { merge: true })
      .then();
  }

  getWeekInfo(): { weekNumber: number, mondayDate: Date, fridayDate: Date } {
    // Calculate week number without modifying the original date
    const dayOfWeek = this.currentDate.getUTCDay() || 7;
    this.currentDate.setUTCDate(this.currentDate.getUTCDate() + 4 - dayOfWeek);

    // Get the date of the Monday
    const mondayDate = new Date(this.currentDate);
    mondayDate.setUTCDate(this.currentDate.getUTCDate() - 3);

    // Get the date of the Friday
    const fridayDate = new Date(this.currentDate);
    fridayDate.setUTCDate(this.currentDate.getUTCDate() + 2);

    // Get first day of year
    const yearStart = new Date(Date.UTC(this.currentDate.getUTCFullYear(), 0, 1));

    // Calculate full weeks to nearest Thursday
    const weekNumber = Math.ceil(((this.currentDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

    return { weekNumber, mondayDate, fridayDate };
  }

  private updateCurrentDateDaily() {
    setInterval(() => { this.currentDate = new Date(); }, 2 * 60 * 60 * 1000); // Update every 2 hours
  }

}
