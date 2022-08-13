import { FormControl, FormGroup } from '@angular/forms';

export interface ContactForm {
    name: FormControl<string>;
    message: FormControl<string>;
    _replyto: FormControl<string>;
    _language: FormControl<string>;
}
