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
  currenttickets;//מערך המיועד לשמירת המערך לאחר כל שינוי
  title = 'Test';
  t=[]
  n = 5;//כמות הכרטיסים בשורה
  matrix;
  tickets:TicketModel[]מערך הכרטיסים
  constructor(){//אתחול
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
  choose(event,x){
    x.status=true
    this.t.push(event.srcElement.innerHTML)
    this.t=[...this.t]
  }
 
  filterBy(event){//פונקציה הנקראת בעת הקלדה בתיבת הטקסט
    debugger
    if(event.key=='Backspace'){
      this.currenttickets= this.tickets
    }
    else{
      this.currenttickets= this.tickets.filter(x=>x.num.includes(event.key))
    }
    
    this.seder()

  }
  filterYes(){//פונקציה הנקראת בלחיצה על נבחרו
    this.currenttickets= this.tickets.filter(x=>x.status==true)
    this.seder()  }
  filterNo(){//פונקציה הנקראת בעת לחיצה על לא נבחרו
    this.currenttickets= this.tickets.filter(x=>x.status==false)
    this.seder()
  }
  filterAll(){//פונקציה הנקראת בלחיצה על הכל
    this.currenttickets= this.tickets;
    this.seder()

  } 
  seder(){//פונקציה המסדרת את הכרטיסים על המסך
    this.matrix = Array
   .from({ length: Math.ceil(this.currenttickets.length / this.n) }, (_, i) => i)
   .map(i => this.currenttickets.slice(i * this.n, i * this.n + this.n));
  }
}
