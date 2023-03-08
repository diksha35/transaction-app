import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {CreditComponent} from '../credit/credit.component';
import { DebitComponent } from '../debit/debit.component';
import { Subscription } from 'rxjs';
import { TransactionService } from 'src/app/service/transaction.service';



@Component({
  selector: 'app-transhistory',
  templateUrl: './transhistory.component.html',
  styleUrls: ['./transhistory.component.css']
})
export class TranshistoryComponent implements OnInit {

  totalBalance:any;
  sub=new Subscription();
  constructor(public dialog: MatDialog, public service:TransactionService) {}

  
   spendingLimit=this.service.setAmountLimit;
   ngOnInit(): void {
     this.sub = this.service.subject2.subscribe((amt:any)=>
     this.totalBalance=amt
     )
     this.totalBalance=this.service.balance;
    
   }
  openDebitDialog(): void {
    const dialogRef = this.dialog.open(DebitComponent);
    // const dialogRef = this.dialog.open(PayComponent, {
    //   height: '300px',
    //   width: '500px',
    // });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreditDialog(): void {
    const dialogRef = this.dialog.open(CreditComponent);
    // const dialogRef = this.dialog.open(PayComponent, {
    //   height: '300px',
    //   width: '500px',
    // });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 ngOnDestroy(){
  this.sub.unsubscribe();
 }

}

