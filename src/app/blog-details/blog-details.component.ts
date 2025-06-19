import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  blog: any;
  imgUrl: string = 'https://www.macreel.co.in/'

  constructor(
    private route: ActivatedRoute,
    private _crud: ServicesService,
  ) {

  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let blogSlug = params['title']; 
      console.log('Slug from URL:', blogSlug);

      if (blogSlug) {
        const blogTitle = this.unslugify(blogSlug); 
        console.log('Converted Title:', blogTitle);
        this._crud.getBlogById(blogTitle).subscribe(res => {
          this.blog = res.data[0];
          console.log('Blog Details:', this.blog);
        });
      }
    });
  }


  unslugify(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }


}
