import { Component } from '@angular/core';

import { AuthorService } from '../../Authors/Services/author.service';

@Component({
    moduleId: module.id,
    selector: 'authors',
    templateUrl: '../../Authors/Views/authors.component.html',
    providers: [AuthorService]
})

export class AuthorsComponent {
    title: string = "Estos son los autores";
    authors: string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}