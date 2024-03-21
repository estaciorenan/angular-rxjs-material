import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formField-input',
  templateUrl: './formField-input.component.html',
  styleUrls: ['./formField-input.component.scss']
})
export class FormFieldInputComponent implements OnInit {
  public value = 'teste';
  public userName = '';
  constructor() { }

  ngOnInit() {
  }

}
