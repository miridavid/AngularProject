import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { TicketModel } from './TicketModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr:BehaviorSubject<number[]>;
  currenttickets
  valueOfInput='1';
  title = 'Test';
  t=[]
  n = 5;
  matrix
  tickets:TicketModel[]
  constructor(){
    this.tickets =[{num:"1",status:false},   
    {num:"2",status:false}, 
    {num:"3",status:false}, 
    {num:"4",status:false}, 
    {num:"5",status:false}, 
    {num:"1",status:false}, 
    {num:"1",status:false}, 
    {num:"1",status:false}, 
    {num:"1",status:false}, 
    {num:"1",status:false}, 
    {num:"2",status:false}, 
    {num:"2",status:false}, 
    {num:"2",status:false}, 
    {num:"2",status:false}, 
    {num:"2",status:false}, 
    {num:"3",status:false}, 
    {num:"3",status:false}, 
    {num:"3",status:false},
    {num:"3",status:false}, 
    {num:"3",status:false},] 
   
    this.currenttickets=this.tickets
    this.seder()
}
  choose(e,x){
   //e.srcElement.classList.add("active")
   x.status=true
    this.t.push(e.srcElement.innerHTML)
    this.t=[...this.t]
  }
 
  filterBy(event){
    debugger
    if(event.key=='Backspace'){
      this.currenttickets= this.tickets
    }
    else{
      this.currenttickets= this.tickets.filter(x=>x.num.includes(event.key))
    }
    
   // this.tickets=[...this.tickets]
    this.seder()

  }
  filterYes(){
    this.currenttickets= this.tickets.filter(x=>x.status==true)
    this.seder()  }
  filterNo(){
    this.currenttickets= this.tickets.filter(x=>x.status==false)
    this.seder()
  }
  filterAll(){
    this.currenttickets= this.tickets;
    this.seder()

  } 
  seder(){
    this.matrix = Array
   .from({ length: Math.ceil(this.currenttickets.length / this.n) }, (_, i) => i)
   .map(i => this.currenttickets.slice(i * this.n, i * this.n + this.n));
  }
}
