import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackBarComp',
  templateUrl: './snackBarComp.component.html',
  styleUrls: ['./snackBarComp.component.scss']
})
export class SnackBarCompComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    public matSnackBarRef: MatSnackBarRef<SnackBarCompComponent>
  ) { }

  ngOnInit() {
  }

  public closeSnackBar() {
    this.matSnackBarRef.dismiss()
  }

}
