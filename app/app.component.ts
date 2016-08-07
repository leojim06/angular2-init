import { Component } from '@angular/core';

import { AuthorsComponent } from './Authors/Components/authors.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <authors></authors>`,
    directives: [AuthorsComponent]
})
export class AppComponent { }