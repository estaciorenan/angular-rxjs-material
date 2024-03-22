import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datePicker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.scss']
})
export class DatePickerComponent implements OnInit {
  public startDate = new Date(2024, 9, 28)
  public minDate = new Date(2024, 8, 28)
  public maxDate = new Date(2024, 10, 28)
  constructor() { }

  ngOnInit() {
  }

}
