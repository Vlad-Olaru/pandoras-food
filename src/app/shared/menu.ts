export interface Menu {
  monday: DayWithOptions;
  tuesday: DayWithOptions;
  wednesday: DayWithOptions;
  thursday: DayWithOptions;
  friday: DayWithOptions;
}

export interface DayWithOptions {
  foodMenu: string;
  closed: boolean;
  foodFinished: boolean
}
