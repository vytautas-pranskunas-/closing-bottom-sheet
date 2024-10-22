import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';
import { TuiRoot } from '@taiga-ui/core';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
    standalone: true,
    selector: 'pa-root',
    imports: [AppComponent, TuiRoot],
    template: '<tui-root><pa-app/></tui-root>',
})
class Root {}

bootstrapApplication(Root, {
  providers: [
    provideAnimations(),
  ],
});
