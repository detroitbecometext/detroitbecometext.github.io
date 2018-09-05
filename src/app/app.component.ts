import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor() 
  {
    //Initialize materialize components
    $(document).ready(function ()
    {
        $('footer').find("a").addClass('fade');
    });

   }
}
