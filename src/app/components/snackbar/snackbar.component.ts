import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarCompComponent } from './snackBarComp/snackBarComp.component';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {

  }

  public openSnackBar() {
    const snackbar = this.snackbar.open('Meu SnackBar', 'Fechar', {
      duration: 3000
    })

    snackbar.afterDismissed().subscribe(_ => {
      console.log('dismissed')
    })
  }

  public openSnackBarComp() {
    this.snackbar.openFromComponent(SnackBarCompComponent, {
      data: 'Snackbar Criado!'
    })

  }

}
