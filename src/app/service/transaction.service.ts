import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  balance:number=10000;
  setAmountLimit:any=3000;

   subject1=new Subject<any>();
     subject2=new Subject<any>();
 sendData(message:any){
  this.subject1.next(message)
 }
  // receivedMessage():Observable<any>{
  //   return this.subject1.asObservable();
  // } 
  setAmount(amt:any){
    this.subject2.next(amt)
  }
  
}
