import { NgModule } from '@angular/core';
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
    faInfoCircle,
    faCircleNotch,
    faBars,
    faSkull,
    faUnlock,
    faEnvelope,
    faQuestion,
    faHome,
    faTv,
    faCheck,
    faTimes,
    faEllipsisH,
    faLockOpen,
    faAngleRight,
    faAngleLeft,
    faPaperPlane,
    faHourglassEnd,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [],
    imports: [FontAwesomeModule],
    exports: [FontAwesomeModule],
})
export class IconsModule {
    constructor(private faIconLibrary: FaIconLibrary) {
        faIconLibrary.addIcons(
            faInfoCircle,
            faCircleNotch,
            faBars,
            faSkull,
            faHourglassEnd,
            faUnlock,
            faEnvelope,
            faQuestion,
            faHome,
            faTv,
            faCheck,
            faTimes,
            faEllipsisH,
            faLockOpen,
            faAngleRight,
            faAngleLeft,
            faPaperPlane
        );
    }
}
