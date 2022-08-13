import {
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';

// TODO: type form
export class ContactForm extends UntypedFormGroup {
    constructor(data: { [key: string]: any | undefined } = undefined) {
        super({
            name: new UntypedFormControl(''),
            _replyto: new UntypedFormControl('', Validators.email),
            message: new UntypedFormControl('', Validators.required),
            _language: new UntypedFormControl('en', Validators.required),
        });

        if (data) {
            this.patchValue(data);
        }
    }
}
