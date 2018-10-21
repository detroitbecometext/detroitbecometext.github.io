import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  message: string;
  isDisabled: boolean;

  constructor() { }

  ngOnInit() 
  {
    this.isDisabled = true;
  }

  onMessageChanged(newValue: string){
    if(newValue != null && !(newValue === "")){
      this.isDisabled = false;
    }
    else{
      this.isDisabled = true;
    }
  }

}
