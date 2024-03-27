import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormFieldModalComponent } from './formField-modal/formField-modal.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(FormFieldModalComponent, {
      data: 'Meu Modal',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })

  }
}
