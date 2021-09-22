import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ContactForm extends FormGroup {
    constructor(data: { [key: string]: any | undefined } = undefined) {
        super({
            name: new FormControl(''),
            _replyto: new FormControl('', Validators.email),
            message: new FormControl('', Validators.required),
            _language: new FormControl('en', Validators.required),
        });

        if (data) {
            this.patchValue(data);
        }
    }
}
