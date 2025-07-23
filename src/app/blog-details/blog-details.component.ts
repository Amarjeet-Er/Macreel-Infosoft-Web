import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {

  blog: any;
  imgUrl: string = 'https://www.macreel.co.in/'

  constructor(
    private route: ActivatedRoute,
    private _crud: ServicesService,
  ) {  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let blogId = params['id']; 

      if (blogId) {        
        this._crud.getBlogById(blogId).subscribe(res => {
          this.blog = res.data[0];
          console.log('Blog Details:', this.blog);
        });
      }
    });
  }
}


  // blog: any;
  // imgUrl = 'https://www.macreel.co.in/';

  // shortDescription = '';   
  // remainingHtml = '';     

  // constructor(
  //   private route: ActivatedRoute,
  //   private _crud: ServicesService
  // ) {}

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     const blogSlug = params['id'];
  //     if (!blogSlug) return;

  //     this._crud.getBlogById(blogSlug).subscribe(res => {
  //       this.blog = res.data?.[0];
  //       if (!this.blog?.Description) return;

  //       const { firstWords, htmlAfter } = this.splitHtmlByWords(
  //         this.blog.Description,
  //         80
  //       );

  //       this.shortDescription = firstWords + ' -';
  //       this.remainingHtml = htmlAfter;
  //     });
  //   });
  // }

 
  // private splitHtmlByWords(html: string, n: number): { firstWords: string; htmlAfter: string } {
  //   const doc = new DOMParser().parseFromString(html, 'text/html');
  //   const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);

  //   let wordsNeeded = n;
  //   const collectedWords: string[] = [];

  //   let node: Text | null;
  //   while (wordsNeeded > 0 && (node = walker.nextNode() as Text | null)) {
  //     const parts = (node.textContent ?? '').trim().split(/\s+/);
  //     if (!parts[0]) continue; 

  //     if (parts.length <= wordsNeeded) {
  //       collectedWords.push(...parts);
  //       wordsNeeded -= parts.length;
  //       node.textContent = '';
  //     } else {
        
  //       collectedWords.push(...parts.slice(0, wordsNeeded));
  //       node.textContent = parts.slice(wordsNeeded).join(' ');
  //       wordsNeeded = 0;
  //     }
  //   }
  //   const firstWords = collectedWords.join(' ');
  //   const htmlAfter = doc.body.innerHTML.trim();

  //   return { firstWords, htmlAfter };
  // }
// }
