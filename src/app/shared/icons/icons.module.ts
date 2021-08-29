import { NgModule } from '@angular/core';
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
    faExternalLinkAlt,
    faCommentSlash,
    faEye,
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
            faPaperPlane,
            faExternalLinkAlt,
            faGithub,
            faCommentSlash,
            faEye
        );
    }
}
