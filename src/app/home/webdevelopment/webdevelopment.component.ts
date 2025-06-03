import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrls: ['./webdevelopment.component.scss']
})
export class WebdevelopmentComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Web Development Company in Delhi | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Macreel Infosoft Pvt. Ltd. is the Best Website Development Company in Delhi, we offer the Best Responsive Web Development Services in India."
      },
      {
        name: 'keywords',
        content: "Best Website Development Company in Delhi, Web Development Services in India, Best Responsive Web Development Services in India, Best Web Development Services"
      },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'distribution', content: 'global' },
      { name: 'language', content: 'English' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: 'Daily' },
      { name: 'robots', content: 'ALL' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'reply-to', content: 'sales@macreel.co.in' },
      { name: 'coverage', content: 'Worldwide' }
    ]);
  }

}