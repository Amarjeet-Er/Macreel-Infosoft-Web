import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {

  constructor(private _meta: Meta, private _title: Title) {
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
  }


  blogs = [
    {
      image: '../../../assets/e-commerce.png',
      alt: 'Top Ecommerce Website Development',
      title: 'Top e-commerce Website Development Company in 2024.',
      description:
        'In the ever-evolving world of eCommerce, having a cutting-edge online store is essential for success. As we move through 2024, businesses need more than just a website—they need a platform that drives sales, engages customers, and adapts to emerging trends.'
    },
    {
      image: '../../../assets/web-app.png',
      alt: 'Dropshipping App Development',
      title: 'How to develop a custom Dropshipping App',
      description:
        'In the rapidly growing world of e-commerce, dropshipping has emerged as a popular model for entrepreneurs. Here’s what you need to know about building your own custom app.'
    },
    {
      image: '../../../assets/mobile-apps.png',
      alt: 'Web Application Development',
      title: 'A complete guide to web application development',
      description:
        'Web applications play a crucial role in transforming business operations. Here’s a guide to the various types and how to choose the right one for your business.'
    }
  ];
}
