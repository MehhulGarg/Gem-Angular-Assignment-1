import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

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
  displayVal(val:any){
      this.data.push(val.text);
      this.ind++;
  }
  getVal(){
    this.displayVal(this.myForm.value);
    this.myForm.reset();
  }

  myForm=new FormGroup({
    text:new FormControl('',Validators.required)
  })
  get text(){
    return this.myForm.get('text');
  }
}
// clear input field after clecked on add button
//add required validation on input field 
