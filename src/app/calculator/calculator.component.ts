import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  billAmount!:number;
  tipAmount!:number;
  total!:number;
  peopleAmount!:number;
  tipChosen:number=0;
  custom!:boolean;
  button1!:boolean;
  button2!:boolean;
  button3!:boolean;
  button4!:boolean;
  button5!:boolean;
  button6!:boolean;



  constructor() {
  }

  ngOnInit(){
    this.total= 0;
    this.tipAmount =0;
  }
  onTipChoose(tip:any){
      this.tipChosen=tip/100;
  }
  onCalculate(){
    if (this.billAmount<=0 || this.peopleAmount<=0 || this.tipChosen<=0){
      this.tipAmount=0.00;
      this.total=0.00;
      alert("Fill The Fields Correctly")
    }else{
      this.tipAmount=Number(((this.tipChosen*this.billAmount)/this.peopleAmount).toFixed(2));
      this.total=Number(((this.billAmount+(this.tipChosen*this.billAmount))/this.peopleAmount).toFixed(2));
      this.custom=false;
    }
  }

  onReset(){
    this.billAmount=0;
    this.custom=false;
    this.peopleAmount=0;
    this.resetButtons();
  }
  customTip(){
    this.custom=true;
    this.tipChosen=0;
  }
  buttonClick(num:number){
    this.resetButtons();
    switch (num){
      case 1:
        this.button1=true;
        this.custom=false;
        break;
      case 2:
        this.button2=true;
        this.custom=false;
        break;
      case 3:
        this.button3=true;
        this.custom=false;
        break;
      case 4:
        this.button4=true;
        this.custom=false;
        break;
      case 5:
        this.button5=true;
        this.custom=false;
        break;
      case 6:
        this.button6=true;
        break;
    }
  }
  resetButtons(){
    this.button1=false
    this.button2=false
    this.button3=false
    this.button4=false
    this.button5=false
    this.button6=false
  }
}
