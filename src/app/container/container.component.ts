import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  breaksPoint = {
    10: { slidesPerView: 1, spaceBetween: 10 },
    500: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 10 },
  };
  breaksPointts = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 10 },
    1440: { slidesPerView: 5, spaceBetween: 10 },
  };
  breaksPointtss = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 10 },
    1440: { slidesPerView: 5, spaceBetween: 10 },
  };
  breaksPoints = {
    320: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 6, spaceBetween: 10 },
    1024: { slidesPerView: 8, spaceBetween: 10 },
  };

  blogs: any;
  imgUrl: string = 'https://www.macreel.co.in/'
  constructor(
    private dialog: MatDialog,
    private _meta: Meta,
    private _title: Title,
    private _router: Router,
    private _crud: ServicesService
  ) {
    this._title.setTitle('Best Software Development Company- Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'title',
        content: 'Elevate your online presence with Macreel best IT solutions.',
      },
      {
        name: 'description',
        content:
          'Macreel Infosoft is the Best Software Development Company. Get Responsive Website Design, SEO Services, Digital Marketing, Software Development, and App Development.',
      },
      {
        name: 'keywords',
        content:
          'Website Designing, Website Designing In Delhi, Web Designing Company Delhi, Website Designing Company Noida, Website Development Company In Noida Best Website Designing Company  In India, Website Designing Services In Noida, Responsive Website Designing Company In Delhi, Ecommerce Website Designing Company In Delhi, Website Designing Company In India, Website Designing Company In Noida, Best Seo Services In Delhi, Web Development Company In Delhi, Web Development Company In India  Software Development Company in Noida  App Development Compnay in Noida Digital Marketing Services SEO Services in Noida',
      },
      { name: 'robots', content: 'follow, index' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'og:url', content: 'https://macreel.co.in/' },
      {
        name: 'og:title',
        content: 'Top IT Services Company in Noida |Website Designing Company',
      },
      {
        name: 'og:description',
        content:
          'Macreel Infosoft is Top IT Services Company in Noida, India. Get Responsive Website Design, SEO Services, Digital Marketing, Software Development, and App Development.',
      },
      {
        name: 'og:image',
        content: 'https://macreel.co.in/img/macreel-new-logo.png',
      },
      { property: 'Website:tag', content: 'Macreel Infosoft Pvt. Ltd.' },
      { property: 'Website:section', content: 'India' },
      { property: 'fb:profile_id', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'twitter:site', content: '@Macreel_Info' },
      { name: 'twitter:creator', content: '@Macreel_Info' },
      { name: 'twitter:title', content: 'Macreel Infosoft Pvt. Ltd.' },
      {
        name: 'twitter:description',
        content:
          'Macreel Infosoft Pvt. Ltd. is a Digital Marketing, Website Designing, Software and Mobile App development Company based at Noida',
      },
      { name: 'description', content: '' },
    ]);


    this.getBlog();
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
    scroll(0, 0);
  }

  selectedIndex: number = 0;

  features = [
    {
      name: 'Customized Solutions',
      title: 'We tailor our services to meet your unique needs.',
      description:
        'We tailor our services to meet your unique needs. Whether it’s website design, software development, or digital marketing, our solutions are crafted to align with your business goals and enhance your brand’s presence.',
      image: 'assets/solution.png',
    },
    {
      name: 'Cutting-Edge Technology',
      title:
        'Stay ahead of the competition with our state-of-the-art technology.',
      description:
        'Stay ahead of the competition with our state-of-the-art technology. We use the latest tools and innovations to ensure your digital presence is modern, efficient, and effective.',
      image: 'assets/technology.png',
    },
    {
      name: 'Quality Assurance',
      title: 'We prioritize quality in every project.',
      description:
        'We prioritize quality in every project. Rigorous testing and quality checks guarantee that our solutions are reliable, secure, and performance driven.',
      image: 'assets/quality.png',
    },
    {
      name: 'Cost-Effective Solutions',
      title: 'Get the best value for your investment.',
      description:
        'Get the best value for your investment. Our services are designed to be affordable without compromising on quality, helping you achieve your business objectives within your budget. Your satisfaction is our priority. We provide transparent communication, timely updates, and responsive support to ensure your project runs smoothly and meets your expectations.',
      image: 'assets/cost.png',
    },
  ];

  selectFeature(index: number) {
    this.selectedIndex = index;
  }

  openEnquiryForm() {
    this.dialog.open(EnquiryFormComponent, {
      disableClose: true,
    });
  }



  getBlog() {
    this._crud.getAllBlogs().subscribe((response) => {
      console.log(response);
      this.blogs = response.data.slice(0, 5);
    });
  }

  onBlog(Id: string) {
    // const blogData = blogTitle
    //   .toLowerCase()
    //   .replace(/[^a-z0-9]+/g, '-')
    //   .replace(/^-+|-+$/g, '');

    // console.log(blogData);

    this._router.navigate(['/blog'], {
      queryParams: {
        id: Id
      }
    });
  }


}
