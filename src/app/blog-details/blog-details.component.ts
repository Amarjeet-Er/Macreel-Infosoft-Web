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

  constructor(private route: ActivatedRoute, private _crud: ServicesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._crud.getBlogById(id).subscribe((res) => {
      this.blog = res.data[0];

      console.log(this.blog, 'hai');

    });
  }
}
