import { NgModule, Optional, SkipSelf } from '@angular/core';

abstract class EnsureImportedOnceModule {
    protected constructor(targetModule: any) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded.`);
        }
    }
}

@NgModule({
  declarations: [],
  imports: []
})
export class CoreModule extends EnsureImportedOnceModule {
    public constructor(@SkipSelf() @Optional() parent: CoreModule) {
        super(parent);
    }
}
