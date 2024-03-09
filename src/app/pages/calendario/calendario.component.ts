import { MatCalendar } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None // add this line
})

export class CalendarioComponent {

  // elegir dia de hoy
  selectedDate: Date = new Date();

 constructor() {}

 // para header de calendario se puede modificar
 getCurrentMonth(): string {
   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const currentMonth = monthNames[this.selectedDate.getMonth()];
   const currentYear = this.selectedDate.getFullYear();
   return currentMonth + ' ' + currentYear; //ejemplo：Feb 2024
 }

 // cuando pulsa previous (anterior)
 previousClicked(): void {
   // cambia el dia como el del mes anterior
   this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
 }

 // cuando pulsa next (siguiente) 
 nextClicked(): void {
   // cambia el dia del mes que viene
   this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
 }

 //  si se cambia la fecha....
 onDateChange(event: any) {
   console.log('Selected Date: ', event);
 }
}


