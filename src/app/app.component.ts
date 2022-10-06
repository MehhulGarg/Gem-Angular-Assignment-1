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
      this.data.push(val);
      this.ind++;
    }
    else{
      alert('Enter Value!');
    }
  }
}
