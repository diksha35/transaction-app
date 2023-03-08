import { Component , Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { TransactionService } from 'src/app/service/transaction.service';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  setLimit=false;
  amountLimit:number | undefined;
  gridsize: number = 0;
  constructor(public dialog: MatDialog, public service:TransactionService) {}
  totalBalance:any;
 
  ngOnInit(): void {
    // this.service.getAmount().subscribe((amt:any)=>
    // this.totalBalance=amt
    // )
    this.totalBalance=this.service.balance
  }
 
  updateSetting(event:any) {
    this.gridsize = event.value;
  }
 
  setSpendingLimit(){
    this.setLimit=true;
  }

  openDialog(limit:any): void {
   
    console.log(limit);
    this.amountLimit=limit;
    this.service.setAmountLimit=this.amountLimit;
    const dialogRef = this.dialog.open(DialogBox, {
        data: {name: this.amountLimit},});

    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog
    //   , 
    //   {
    //   data: {name: this.name, animal: this.animal},
    // });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

 reset(){
  this.amountLimit= 0;
 }
}


@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class DialogBox{
  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

