import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 1';
  display=true;
  count=0;
  color:string='';
  toggle(){
    this.display=!this.display;
  }
  counter(){
    this.count++;
    console.log("Count:" + this.count);
  }
  public data: string[] = [];
  public ind: number=0;
  getVal(val:string){
    if(val!=''){
      console.log(val)
      this.data.push(val);
      this.ind++;
      console.log(this.data.length);
      if(this.ind%5==0){
        this.color='blue';
      }
      else{
        this.color='black';
      }
    }
    else{
      alert('Enter Value!');
    }
  }
}
