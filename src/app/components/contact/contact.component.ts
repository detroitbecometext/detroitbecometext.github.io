import { Component, OnInit } from '@angular/core';
declare var $: any;
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  language: string;
  formValid: boolean;
  isEmailValid: boolean;
  isMessageValid: boolean;

  constructor() 
  { 
   
  }

  ngOnInit() 
  {
    this.language = this.getLanguage(navigator.language);
    this.formValid = false;
    this.isEmailValid = true;
    this.isMessageValid = false;
    this.checkFormValid();

    var self = this;

    $(document).ready(function () 
    {
      $("#email").change(() => 
      {
        if($("#email").val() === "" || regex.test($("#email").val()))
        {
          self.isEmailValid = true;
        }
        else
        {
          self.isEmailValid = false;
        }
        self.checkFormValid();
      }
      );

      $("#message").change(function() 
      {
        if($("#message").val() === ""){
          self.isMessageValid = false;
        }
        else{
          self.isMessageValid = true;
        }
        self.checkFormValid();
      });

    });
  }

  /**
   * This function will return a language supported by formspree depending on the user's language.
   * @param navLanguage The user's navigator language.
   */
  getLanguage(navLanguage: string): string{
    let languages: string[] = ["ar", "bg", "ca", "cs", "da", "de", "es", "fi", "fr", "hu", "id", "is", "it", "ja", "ko", "lt", "nl", "no", "pl", "pt-BR", "pt-PT", "ru", "sk", "sr", "sv", "th", "tr", "uk", "zh-CN", "zh-TW"];
    for(let lang of languages){
      if(navLanguage.includes(lang)){
        return lang;
      }
    }
    return "en";
  }

  checkFormValid(): any
  {
    if(this.isEmailValid && this.isMessageValid){
      this.formValid = true;
      $("#submit").removeClass("disabled");
    }
    else{
      this.formValid = false;
      $("#submit").addClass("disabled");
    }
    
  }
}
