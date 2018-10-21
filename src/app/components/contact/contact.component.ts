import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  language: string;
  contactForm: FormGroup;
  isSubmitted: boolean;
  isSuccess: boolean;
  isError: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() 
  {
    this.language = this.getLanguage(navigator.language);
    this.isSubmitted = false;
    this.isSuccess = false;
    this.isError = false;

    //Create the control group
    this.contactForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl('', Validators.required)
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

  onSubmit(){
    //Nothing to do here
    console.log("submitting...");
    
    //Reset error in case we are trying again
    this.isError = false;

    if (this.contactForm.valid) 
    {
      //Create the object to send
      let formResult = {
        name: this.contactForm.value.name,
        _replyto: this.contactForm.value.email,
        message: this.contactForm.value.message,
        _subject: "New submission!",
        _language: this.language
      }
      console.log(formResult);

      this.isSubmitted = true;

      this.http.post('https://formspree.io/dbtext.contact@gmail.com', formResult)
        .subscribe(
          success => this.isSuccess = true,
          error => 
          { 
            this.isError = true; 
            console.error(error); 
            this.isSubmitted = false;
          }
        );
    }
  }

}
