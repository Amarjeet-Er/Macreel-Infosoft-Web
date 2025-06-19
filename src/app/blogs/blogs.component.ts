import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  imgUrl: string = 'https://www.macreel.co.in/'
  blogs: any[] = [];
  constructor(
    private _meta: Meta,
    private _title: Title,
    private _crud: ServicesService,
    private _router: Router
  ) {
    this._title.setTitle('Blogs | Best IT Solution Company |Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content:
          'Explore the expertise of the best software development company in website design, development, software, mobile app development, and digital marketing. Transform your digital presence with our cutting-edge solutions.',
      },
      {
        name: 'keywords',
        content:
          'Best Website Development Company in Delhi, Web Development Services in India, Best Responsive Web Development Services in India, Best Web Development Services, Best Digital Marketing Company, Best Digital Marketing Agency in Delhi NCR, best IT Company in Noida, best mobile app development company in India, top mobile app development company in India, android development company in Noida, iOS development company in Noida',
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
      { name: 'coverage', content: 'Worldwide' },
    ]);

    this.getBlog();
  }

  getBlog() {
    this._crud.getAllBlogs().subscribe((response) => {
      console.log(response);
      this.blogs = response.data;
    });
  }

  onBlog(blogTitle: string) {
    const blogData = blogTitle.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    console.log(blogData);

    this._router.navigate(['/blog'], {
      queryParams: {
        title: blogData
      }
    });
  }

}
