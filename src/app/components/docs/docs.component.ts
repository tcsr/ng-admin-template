import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html'
})
export class DocsComponent {

  documentationContent!: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Replace 'documentation-url' with the actual URL of your Compodoc-generated documentation.
    // this.http.get('../../../../documentation/index.html', { responseType: 'text' }).subscribe(data => {
    //   this.documentationContent = data;
    // });
  }
}
