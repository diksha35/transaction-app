import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from 'src/app/service/transaction.service';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {


  availBalance:number =0;
  serBalance:number=0;
  creditAmount:any;

  panelOpenState = false;

  transForm1=new FormGroup(
  {
    paymentInfo:new FormControl('',[Validators.required]),
    amount:new FormControl(0,[Validators.required]),
    remark:new FormControl('',[Validators.required]),
    type: new FormControl('Credit'),
    status:new FormControl('Pending')

  }
 );
 transForm2=new FormGroup(
  {
    paymentInfo:new FormControl('',[Validators.required]),
    amount:new FormControl(0,[Validators.required]),
    remark:new FormControl('',[Validators.required]),
    type: new FormControl('Credit'),
    status:new FormControl('Pending')

  }
 );

  constructor( private service:TransactionService,private dialogRef:MatDialogRef<CreditComponent>) { }
  ngOnInit(): void {
    this.serBalance=this.service.balance;
    // this.service.getAmount().subscribe((amt:any)=>
    // this.serBalance=amt
    // )
  }
  submitData() {
    console.log(this.transForm1.value);
    this.service.sendData(this.transForm1.value);
    this.creditAmount=this.transForm1.value.amount;
 this.dialogRef.close(
  this.transForm1.value
 );
 this.availBalance= this.service.balance + this.creditAmount;
this.service.balance=this.availBalance;
 console.log(this.service.balance);
this.service.setAmount(this.availBalance);

   
  
  }
  addData() {
    console.log(this.transForm2.value);
      this.service.sendData(this.transForm2.value);
      this.creditAmount = this.transForm2.value.amount;
    this.dialogRef.close(
     this.transForm2.value
    );
    this.availBalance=this.service.balance+ this.creditAmount;
//  console.log(this.availBalance);
//  this.service.setAmount(this.availBalance); 
//  this.service.balance=this.availBalance;
this.service.balance=this.availBalance;
 console.log(this.service.balance);
this.service.setAmount(this.availBalance);
   
 }

}

