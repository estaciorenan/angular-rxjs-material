import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-formField-modal',
  templateUrl: './formField-modal.component.html',
  styleUrls: ['./formField-modal.component.scss']
})

export class FormFieldModalComponent implements OnInit {
  public value = 'teste';
  public userName = '';
  constructor(public matDialogRef: MatDialogRef<FormFieldModalComponent>) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.matDialogRef.close();
  }

}
